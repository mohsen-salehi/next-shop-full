import mongoose from "mongoose";

async function connect() {
    await mongoose.connect("mongodb://127.0.0.1:27017/shopping")
    console.log("connected")
}

const db = {connect}
export default db;