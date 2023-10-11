import mongoose from "mongoose";

const {Schema} = mongoose

const productSchema = new Schema({
    name: {type: String, required: true},
    slug: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    count: {type: Number, required: true , default : 0},
    image: {type: String, required: true},
})

const Product = mongoose.models?.product || mongoose.model("product", productSchema)

export default Product;