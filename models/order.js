import mongoose from "mongoose";
const {Schema} = mongoose

const orderSchema = new Schema({
    user : {type : mongoose.Schema.Types.ObjectId , ref : "User" , required : true} ,
    orderItems : [
        {
            title : { type : String , required: true},
            price : { type : Number , required: true},
            quantity : { type : Number , required: true},
        }
    ],
    shippingData : {
        name : {type : String , required : true},
        address : {type : String , required : true},
        postalCode : {type : Number , required : true},
    } ,
    paymentMethod : {type : String , required : true} ,
    totalPrice : {type : Number , required : true}

})

const Order = mongoose.models.order || mongoose.model("order" , orderSchema)

export default Order;