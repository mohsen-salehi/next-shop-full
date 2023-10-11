import mongoose from "mongoose";

async function connect() {
    await mongoose.connect("mongodb://0.0.0.0:27017/shopping")
}
const convertToObject = (doc)  => {
    doc._id = doc._id.toString()
    return doc
}

const db = {connect , convertToObject}
export default db;