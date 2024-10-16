import express from "express";
import { signup, login, getAllUsers, getUserById, deleteUser } from "../controller/userController.js"; // Import the new controller functions

const router = express.Router();

// User registration and login routes
router.post("/signup", signup);
router.post("/login", login);

// Additional user management routes
router.get("/users", getAllUsers); // Get all users
router.get("/users/:id", getUserById); // Get user by ID
router.delete("/users/:id", deleteUser); // Delete user by ID

export default router;
