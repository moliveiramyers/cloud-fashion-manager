import express from "express";
import {
    listProducts,
    createProduct,
    showProduct,
    editProduct,
    removeProduct,
    showCreateForm,
    showCollection,
    showCollections,
    showEditForm
} from "./controllers/product.js";
import { showAdminPage } from "./controllers/admin.js";
import { showCreateCollectionForm, createCollection, showEditCollectionForm, editCollection, removeCollection } from "./controllers/collection.js";

const router = express.Router();


// HOME PRODUCTS
router.get("/", listProducts);

// ADMIN
router.get("/admin", showAdminPage);

// CREATE PRODUCT
router.get("/create", showCreateForm);
router.post("/create", createProduct);

// COLLECTIONS (IMPORTANT: before /:id)
router.get("/collections/create", showCreateCollectionForm);
router.post("/collections/create", createCollection);

router.get("/collections", showCollections);
router.get("/collections/:collection", showCollection);

// PRODUCT DETAILS (MUST BE LAST)
router.get("/:id", showProduct);

// UPDATE PRODUCT
router.get("/edit/:id", showEditForm);
router.post("/edit/:id", editProduct);

// DELETE PRODUCT
router.post("/delete/:id", removeProduct);


// EDIT COLLECTION
router.get("/collections/edit/:id", showEditCollectionForm);
router.post("/collections/edit/:id", editCollection);

// DELETE COLLECTION
router.post("/collections/delete/:id", removeCollection);

export default router;
