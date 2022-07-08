import mongoose from "mongoose";

// Media Schema

const CardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  images: [String],
  createdZ: { type: Date, required: true },
  lastEditedZ: { type: Date, required: true },
  oldWork: Boolean,
});

export default mongoose.model("Card", CardSchema);
