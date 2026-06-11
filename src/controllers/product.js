import {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../models/product.js";

import { getProductsByCollection, getAllCollections, addCollection } from "../models/collection.js";


// CREATE PRODUCT

const createProduct = async (req, res, next) => {
    try {
        const newProduct = await addProduct(req.body);
        return res.redirect(`/products/${newProduct.id}`);
    } catch (err) {
        next(err);
    }
};

// Show create Form
const showCreateForm = async (req, res) => {
    const collections =
        await getAllCollections();

    res.render('products/create', { title: 'Add new product', collections })
}


// LIST PRODUCTS

const listProducts = async (req, res, next) => {
    try {
        const products = await getAllProducts();
        return res.render("products/index", { products });
    } catch (err) {
        next(err);
    }
};

// PRODUCT DETAILS

const showProduct = async (req, res, next) => {
    try {
        const product = await getProductById(req.params.id);

        if (!product) {
            const error = new Error("Product not found");
            error.status = 404;
            return next(error);
        }

        return res.render("products/show", { product });
    } catch (err) {
        next(err);
    }
};

// UPDATE PRODUCT

const editProduct = async (req, res, next) => {
    try {
        await updateProduct(req.params.id, req.body);
        return res.redirect("/products");
    } catch (err) {
        next(err);
    }
};

const showEditForm = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await getProductById(id);
        const collections =
            await getAllCollections();
        if (!product) {
            const error = new Error("Product not found");
            error.status = 404;
            return next(error);
        }
        res.render('products/edit', { product, collections });
    } catch (err) {
        next(err);
    }
};


// DELETE PRODUCT

const removeProduct = async (req, res, next) => {
    try {
        await deleteProduct(req.params.id);
        return res.redirect("/products");
    } catch (err) {
        next(err);
    }

};

const showCollection = async (req, res, next) => {
    try {
        console.log("Collection:", req.params.collection);
        const collection = req.params.collection;
        const products = await getProductsByCollection(collection);


        console.log("Collection:", collection);
        console.log("Products found:", products.length);
        console.log(products);

        res.render('products/index', {
            products, collection
        });
    } catch (error) {
        next(error);
    }
}

const showCollections = async (req, res, next) => {
    try {
        const collections = await getAllCollections();
        res.render("collections/index", { collections });
        res.render('collections/index', { collections })
    } catch (error) {
        next(error);
    }
};



export { createProduct, listProducts, updateProduct, showProduct, editProduct, removeProduct, showCreateForm, showCollection, showCollections, showEditForm }