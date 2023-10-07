import mongoose from "mongoose";

async function connect() {
    await mongoose.connect("mongodb://127.0.0.1:2717/shopping")
    console.log("connected")
}

const db = {connect}
export default db;