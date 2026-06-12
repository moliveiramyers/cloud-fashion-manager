# Overview

The purpose of this project was to expand my knowledge of cloud-based application development by building a full-stack web application that integrates with a cloud database. Through this project, I gained experience working with cloud services, server-side rendering, CRUD operations, and database management in a real-world development environment.

Cloud Fashion Manager is a web application that allows users to manage fashion products and collections. The application stores all data in Google Firebase Firestore, a cloud-hosted NoSQL database. Users can create, edit, view, and delete products, organize products into collections, and manage collection information through a clean web interface built with Express and EJS.

To use the application, users can browse the list of products, create new products, edit existing products, create collections, assign products to collections, and remove products or collections. Collection pages display all products belonging to a specific collection, providing an organized way to manage inventory.

My purpose for developing this software was to gain practical experience integrating a cloud database into a web application while learning how data can be stored, retrieved, updated, and deleted through a cloud service. This project also allowed me to strengthen my understanding of backend architecture, routing, MVC design patterns, and cloud deployment.

[Software Demo Video](https://www.loom.com/share/ff1346ecafed4cf59e1cf91c48cfa34b)

# Cloud Database

This project uses Google Firebase Firestore as its cloud database. Firestore is a scalable NoSQL document database hosted by Google Cloud that allows applications to store and synchronize data in real time.

The database contains two main collections:

**products**

* name
* price
* collection
* gender
* size
* imageUrl
* stock
* discount
* isActive
* createdAt

**collections**

* name
* description
* createdAt

Products are linked to collections through the collection field, which stores the collection name. When a collection is viewed, the application queries Firestore to retrieve all products belonging to that collection.

# Development Environment

### Tools Used

* Visual Studio Code
* Node.js
* Git
* GitHub
* Firebase Console
* Firestore Database
* Render (deployment platform)

### Languages and Libraries

* JavaScript (ES Modules)
* Node.js
* Express.js
* EJS (Embedded JavaScript Templates)
* Firebase Admin SDK
* Dotenv
* Nodemon

# Useful Websites

* https://firebase.google.com/docs/firestore
* https://expressjs.com
* https://ejs.co
* https://cloud-fashion-manager.onrender.com
* https://stackoverflow.com
* https://developer.mozilla.org

# Future Work

* Add user authentication and role-based access control.
* Improve product filtering and search functionality.
* Store collection references using document IDs instead of collection names.
* Add image upload support using Firebase Storage.
* Improve responsive design for mobile devices.
* Add product inventory analytics and reporting.
* Deploy a production version with secure environment variable management.
