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
    return await collectionsRef.doc(id).update({
        name: data.name,
        description: data.description || ""
    });
};

const deleteCollection = async (id) => {
    return await collectionsRef.doc(id).delete();
};

export { getProductsByCollection, getAllCollections, addCollection, updateCollection, deleteCollection, collectionsRef }