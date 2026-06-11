import { addCollection, updateCollection, deleteCollection, collectionsRef } from "../models/collection.js";



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
        return await addCollection(req.body);

        res.redirect("/products/collections");
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
      return  res.render("collections/edit", { collection });

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

const removeCollection = async (req, res, next) => {
    try {
        await deleteCollection(req.params.id);
       return res.redirect("/products/collections");
    } catch (err) {
       return next(err);
    }
};

export {
    showAdminPage,
    showCreateCollectionForm,
    createCollection, showEditCollectionForm, editCollection, removeCollection
};