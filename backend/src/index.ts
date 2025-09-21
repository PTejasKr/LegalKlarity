import dotenv from "dotenv";
import * as functions from "firebase-functions";
dotenv.config();
import { app } from "./app";

// Export your Express app as a Firebase Function
exports.api = functions.https.onRequest(app);
