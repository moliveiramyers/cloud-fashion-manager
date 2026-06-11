import db from "../firebase/firebaseConfig.js";

const productsRef = db.collection("products");

//
// CREATE
//
const addProduct = async (product) => {
    return await productsRef.add({
        name: product.name,
        price: product.price,
        collection: product.collection,
        gender: product.gender,
        size: product.size,
        imageUrl: product.imageUrl,
        stock: product.stock ?? null,
        discount: product.discount ?? 0,
        isActive: product.isActive ?? true,
        createdAt: new Date()
    });
};

//
// READ ALL
//
const getAllProducts = async () => {
    const snapshot = await productsRef.get();

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

//
// READ ONE
//
const getProductById = async (id) => {
    const doc = await productsRef.doc(id).get();

    if (!doc.exists) return null;

    return {
        id: doc.id,
        ...doc.data()
    };
};

//
// UPDATE
//
const updateProduct = async (id, data) => {
    return await productsRef.doc(id).update(data);
};

// DELETE
//
const deleteProduct = async (id) => {
    return await productsRef.doc(id).delete();
};



export { deleteProduct, updateProduct, getProductById, getAllProducts, addProduct }