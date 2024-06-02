import mongoose from "mongoose";
let isConnect = false;
const collection = "todo_app";
const MONGODB_USER_URI =
  "mongodb+srv://user123:tnYblgHYmBbv0Fin@cluster0.ryyhcii.mongodb.net";

export const mongooseConnect = async () => {
  mongoose.set("strictQuery", true);
  if (isConnect) return;
  if (!`${MONGODB_USER_URI}/${collection}/?retryWrites=true&w=majority`)
    return console.log("Mongo DB URL Not Found!");
  try {
    await mongoose.connect(
      `${MONGODB_USER_URI}/${collection}/?retryWrites=true&w=majority`
    );
    isConnect = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
