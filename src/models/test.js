import db from "../firebase/firebaseConfig.js";

const testFirestore = async () => {
    try {
        const docRef = await db.collection("test").add({
            message: "Firestore connected successfully 🚀",
            createdAt: new Date(),
        });

        console.log("Document created with ID:", docRef.id);
    } catch (error) {
        console.error("Firestore connection error:", error);
    }
};

export default testFirestore;