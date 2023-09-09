import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwrod: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

const User = mongoose.models.user || mongoose.model("User", userSchema);

export default User;
