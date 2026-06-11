import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(
    fs.readFileSync(new URL("../../firebase/serviceAccountKey.json", import.meta.url))
);

// Initialize Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Firestore instance
const db = admin.firestore();

export default db;
