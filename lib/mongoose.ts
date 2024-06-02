import mongoose from "mongoose";
let isConnect = false;
const collection = "todo_app";
const MONGODB_USER_URI =
  "mongodb+srv://user123:tnYblgHYmBbv0Fin@cluster0.ryyhcii.mongodb.net";

export const mongooseConnect = async () => {
  if (isConnect) return;
  try {
    await mongoose.connect(`${MONGODB_USER_URI}/${collection}`);
    isConnect = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
