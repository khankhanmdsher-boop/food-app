const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const Order = require('./models/Order');

const app = express();

// Database Connect
connectDB();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Order Place API Route
app.post('/api/orders', async (req, res) => {
    try {
        const { name, address, items, totalAmount } = req.body;
        const newOrder = new Order({ userName: name, address, items, totalAmount });
        await newOrder.save();
        res.json({ message: 'ऑर्डर सफलतापूर्वक सेव हो गया है! 🚚' });
    } catch (err) {
        res.status(500).json({ message: 'ऑर्डर सेव करने में समस्या आई' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
