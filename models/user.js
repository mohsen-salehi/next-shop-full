import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false}
})

const User = mongoose.models.user || mongoose.model("user", userSchema)

export default User;