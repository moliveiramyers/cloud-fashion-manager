import "dotenv/config";
import admin from "firebase-admin";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const getServiceAccount = () => {
    const envValue = process.env.FIREBASE_SERVICE_ACCOUNT;

    if (envValue && envValue.trim() !== "{") {
        const serviceAccount = JSON.parse(envValue);

        if (serviceAccount.private_key) {
            serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
        }

        return serviceAccount;
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const envPath = path.join(__dirname, "..", "..", ".env");

    if (!fs.existsSync(envPath)) {
        return null;
    }

    const envFile = fs.readFileSync(envPath, "utf8");
    const match = envFile.match(/(?:^|\r?\n)FIREBASE_SERVICE_ACCOUNT=({[\s\S]*?^\})/m);

    if (!match) {
        return null;
    }

    const serviceAccount = JSON.parse(match[1]);

    if (serviceAccount.private_key) {
        serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
    }

    return serviceAccount;
};

const serviceAccount = getServiceAccount();

if (!serviceAccount) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT is missing in environment variables");
}

// Initialize Firebase
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

// Firestore instance
const db = admin.firestore();

export default db;
