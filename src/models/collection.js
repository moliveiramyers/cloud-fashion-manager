import db from "../firebase/firebaseConfig.js";
import { updateProduct } from "./product.js";

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
    // 1. Get old collection data
    const doc = await collectionsRef.doc(id).get();
    const oldName = doc.data().name;

    const newName = data.name;

    // 2. Update collection itself
    await collectionsRef.doc(id).update({
        name: newName
    });

    // 3. If name changed → update products
    if (oldName !== newName) {
        const products = await getProductsByCollection(oldName);

        for (const product of products) {
            await updateProduct(product.id, {
                collection: newName
            });
        }
    }

    return true;
};

const deleteCollection = async (id) => {
    return await collectionsRef.doc(id).delete();
};

export { getProductsByCollection, getAllCollections, addCollection, updateCollection, deleteCollection, collectionsRef }