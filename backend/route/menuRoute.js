import express from 'express';
import {
  createMenuItem,
  getMenuItems,
  getMenuItemsByCategory,
  getMenuItemById,
  updateMenuItemById,
  deleteMenuItemById
} from '../controller/menuController.js';

import upload from '../utils/multer.js';
 // Import multer setup

const router = express.Router();

// @route POST /api/menu
// @desc Create a new menu item
// @access Private (You can add authentication middleware here for private access)
router.post('/new', upload.single('image'), createMenuItem); // Use upload middleware here

// @route GET /api/menu
// @desc Get all menu items
// @access Public
router.get('/', getMenuItems);

// @route GET /api/menu/category/:category
// @desc Get menu items by category
// @access Public
router.get('/category/:category', getMenuItemsByCategory);

// @route GET /api/menu/:id
// @desc Get a single menu item by ID
// @access Public
router.get('/:id', getMenuItemById);

// @route PATCH /api/menu/:id
// @desc Update a menu item by ID
// @access Private
router.patch('/:id', upload.single('image'), updateMenuItemById); // Use upload middleware here if updating images

// @route DELETE /api/menu/:id
// @desc Delete a menu item by ID
// @access Private
router.delete('/:id', deleteMenuItemById);

export default router;
