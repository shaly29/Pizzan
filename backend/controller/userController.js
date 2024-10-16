import User from "../model/userModel.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password, contactNo } = req.body;  // Added contactNo
        const user = await User.findOne({ email });
        
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
            contactNo: contactNo,  // Store the contact number
        });
        
        await createdUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
                contactNo: createdUser.contactNo,  // Return contact number
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        
        const isMatch = await bcryptjs.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                    contactNo: user.contactNo,  // Return contact number on login
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password'); // Exclude password field
        res.status(200).json(users);
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to get a specific user by ID
export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id; // Assuming the user ID is passed as a URL parameter
        const user = await User.findById(userId, '-password'); // Exclude password field

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id; // Assuming the user ID is passed as a URL parameter
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};