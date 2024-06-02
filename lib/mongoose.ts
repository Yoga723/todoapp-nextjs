import mongoose from "mongoose";
let isConnect = false;

export const mongooseConnect = async () => {
  if (isConnect) return;
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    isConnect = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
