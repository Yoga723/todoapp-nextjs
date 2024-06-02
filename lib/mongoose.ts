import mongoose from "mongoose";
let isConnect = false;
const myDb = "todo_app";

export const mongooseConnect = async () => {
  if (isConnect) return;
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}/${myDb}`
    );
    isConnect = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
