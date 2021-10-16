const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
    sellerDocument: { 
        type: String,
        required: true 
    },
    products: { 
        type: Array, 
        default: [] 
    },
    nameCustomer: {
        type: String
    },
    quantity: {
        type: Number
    },
    totalPrice: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'Not processed',
        enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;