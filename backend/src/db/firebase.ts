import dotenv from 'dotenv';
import admin from 'firebase-admin';
import path from 'path';
dotenv.config();

// Use service account key file instead of environment variable
const serviceAccountPath = path.join(__dirname, 'serviceAccountKey.json');
const serviceAccount = require(serviceAccountPath);

// Log the service account for debugging
console.log("Service Account loaded from file:", serviceAccountPath);

// Initialize Firebase Admin SDK with default credentials for development
if (!admin.apps.length) {
    try {
        const connected = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });

        if (connected) {
            console.log(`✅ Firebase connected successfully`);
        } else {
            console.error(`❌ Failed to connect to Firebase`);
            throw new Error("Failed to initialize Firebase");
        }
    } catch (error) {
        console.log("⚠️  Firebase connection failed, running in mock mode");
        console.error("Firebase connection error:", error);
        // In development, we can continue without Firebase
    }
}


export const db = admin.apps.length > 0 ? admin.firestore() : null;
export const auth = admin.apps.length > 0 ? admin.auth() : null;

export default admin;
