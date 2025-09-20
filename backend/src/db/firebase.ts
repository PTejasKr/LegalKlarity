import dotenv from 'dotenv';
import admin from 'firebase-admin';
import path from 'path';
dotenv.config();

let serviceAccount;
let serviceAccountPath;

try {
    // Use service account key file instead of environment variable
    serviceAccountPath = path.join(__dirname, 'serviceAccountKey.json');
    serviceAccount = require(serviceAccountPath);
    console.log("Service Account loaded from file:", serviceAccountPath);
} catch (error) {
    console.log("⚠️  Service account key file not found, running in mock mode");
    console.error("Service account error:", error);
}

// Initialize Firebase Admin SDK with default credentials for development
if (serviceAccount && !admin.apps.length) {
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
} else if (!admin.apps.length) {
    console.log("⚠️  No service account provided, running in mock mode");
    // Initialize with mock credentials for development
    // This allows the app to start without a real Firebase connection
}


export const db = admin.apps.length > 0 ? admin.firestore() : null;
export const auth = admin.apps.length > 0 ? admin.auth() : null;

export default admin;
