import Order from "../model/orderModel.js";
import User from "../model/userModel.js";

// Create a new order
export const createOrder = async (req, res) => {
    const { userId, items, totalAmount } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const newOrder = new Order({
            user: userId,
            items,
            totalAmount,
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// Get all orders
export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("user items.book");
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Get a single order by ID
export const getOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id).populate("user items.book");

        if (!order) return res.status(404).json({ message: "Order not found" });

        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update an order's status
export const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updatedOrder)
            return res.status(404).json({ message: "Order not found" });

        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// Delete an order
export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedOrder = await Order.findByIdAndDelete(id);

        if (!deletedOrder)
            return res.status(404).json({ message: "Order not found" });

        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
