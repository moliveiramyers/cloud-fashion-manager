import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

// import testFirestore from './src/models/testModel.js';

import productRoutes from "./src/routes.js";

// App
const app = express();




// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the port number the server will listen on
const PORT = process.env.PORT || 4000;

// Paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// Static files
app.use(express.static(path.join(__dirname, "src", "public")));

// Route test

// Products 
app.use("/products", productRoutes);

app.get('/', (req, res) => {
    res.redirect("/products");
})

// Test 
// testFirestore();

app.use((err, req, res, next) => {
    // Log error details for debugging
    console.error('Error occurred:', err.message);
    console.error('Stack trace:', err.stack);

    // Determine status and template
    const status = err.status || 500;
    const template = status === 404 ? '404' : '500';

    // Prepare data for the template
    const context = {
        title: status === 404 ? 'Page Not Found' : 'Server Error',
        error: err.message,
        stack: err.stack
    };

    // Render the appropriate error template
    res.status(status).render(`errors/${template}`, context);
});

// Start server

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
