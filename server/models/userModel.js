import mongoose from "mongoose";

// User Model Schema

const UserSchema = new mongoose.Schema({
  emailAddress: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", UserSchema);
