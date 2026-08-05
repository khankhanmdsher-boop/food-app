const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userName: String,
    phone: String,
    email: String,
    address: String,
    items: Array,
    totalAmount: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
