import db from "../firebase/firebaseConfig.js";

const collectionsRef = db.collection("collections");
const productsRef = db.collection("products");

// Get Collection
const getProductsByCollection = async (collection) => {
    const snapshot = await productsRef.where("collection", "==", collection)
        .get();

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

const getAllCollections = async () => {
    const snapshot = await collectionsRef.get();
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

const addCollection = async (data) => {
    return await collectionsRef.add({
        name: data.name,
        description: data.description || '',
        createdAt: new Date()
    });
};

const updateCollection = async (id, data) => {
    const collectionRef = collectionsRef.doc(id);
    const collectionDoc = await collectionRef.get();

    if (!collectionDoc.exists) {
        const error = new Error("Collection not found");
        error.status = 404;
        throw error;
    }

    const oldName = collectionDoc.data().name;
    const newName = data.name;
    const description = data.description || "";

    const batch = db.batch();
    batch.update(collectionRef, {
        name: newName,
        description
    });

    if (oldName !== newName) {
        const productsSnapshot = await productsRef
            .where("collection", "==", oldName)
            .get();

        productsSnapshot.docs.forEach((productDoc) => {
            batch.update(productDoc.ref, {
                collection: newName
            });
        });
    }

    await batch.commit();
    return true;
};

const deleteCollection = async (id) => {
    return await collectionsRef.doc(id).delete();
};

export { getProductsByCollection, getAllCollections, addCollection, updateCollection, deleteCollection, collectionsRef }
