import { addCollection, updateCollection, deleteCollection, collectionsRef, getProductsByCollection, getAllCollections } from "../models/collection.js";
import { deleteProduct } from "../models/product.js";


const showAdminPage = async (req, res) => {
    return res.render("admin");
};

const showCreateCollectionForm = async (req, res) => {
    return res.render("collections/create");
};

const createCollection = async (req, res, next) => {
    try {
        console.log("🔥 POST HIT");
        console.log(req.body);
        await addCollection(req.body);
        return res.redirect("/products/collections");
    } catch (err) {
        return next(err);
    }
};

const showEditCollectionForm = async (req, res, next) => {
    try {
        const id = req.params.id;
        const snapshot = await collectionsRef.doc(id).get();
        if (!snapshot.exists) {
            return res.status(404).send('Collection not found');
        }
        const collection = {
            id: snapshot.id,
            ...snapshot.data()
        };
        return res.render("collections/edit", { collection });

    } catch (err) {
        return next(err);
    };

};

const editCollection = async (req, res, next) => {
    try {
        await updateCollection(req.params.id, req.body);
        return res.redirect("/products/collections");
    } catch (err) {
        return next(err);
    }
};
const showCollections = async (req, res, next) => {
    try {
        const collections = await getAllCollections();
        return res.render("collections/index", { collections });
    } catch (error) {
        next(error);
    }
};

const showCollection = async (req, res, next) => {
    try {
        const collectionName = req.params.collection;

        const products = await getProductsByCollection(collectionName);

        const collectionsSnapshot = await collectionsRef
            .where("name", "==", collectionName)
            .get();

        const collectionDoc = collectionsSnapshot.docs[0];

        if (!collectionDoc) {
            return res.status(404).send("Collection not found");
        }

        const collection = {
            id: collectionDoc.id,
            ...collectionDoc.data()
        };

        res.render("collections/show", {
            collection,
            products
        });

    } catch (err) {
        next(err);
    }
};
const removeCollection = async (req, res, next) => {
    try {
        const id = req.params.id;

        const doc = await collectionsRef.doc(id).get();
        const collectionName = doc.data().name;

        const products = await getProductsByCollection(collectionName);

        // delete all products first
        for (const p of products) {
            await deleteProduct(p.id);
        }

        // delete collection
        await collectionsRef.doc(id).delete();

        res.redirect("/products/collections");

    } catch (err) {
        next(err);
    }
};

export {
    showAdminPage,
    showCreateCollectionForm,
    createCollection, showEditCollectionForm, editCollection, removeCollection, showCollection, showCollections
};
