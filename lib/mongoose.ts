import mongoose from "mongoose";
let isConnect = false;
const MONGODB_USER_URI =
  "mongodb+srv://user123:tnYblgHYmBbv0Fin@cluster0.ryyhcii.mongodb.net/todo_app";

export const mongooseConnect = async () => {
  mongoose.set("strictQuery", true);
  if (isConnect) return;
  if (!`${MONGODB_USER_URI}`)
    return console.log("Mongo DB URL Not Found!");
  try {
    await mongoose.connect(`${MONGODB_USER_URI}`);
    isConnect = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
