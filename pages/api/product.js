import db from "@/utils/db";
import Product from "@/models/product";
import products from "@/data/products";

async function handler (req , res){
    await db.connect()
    await Product.deleteMany()
    await Product.insertMany(products)
    res.send({message : "product added."})
}

export default handler;