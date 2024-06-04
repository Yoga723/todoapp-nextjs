import mongoose, { Schema, model } from "mongoose";
const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  order: { type: Number, required: true },
});

export const Tasks = mongoose.models.Tasks || model("Tasks", taskSchema);
