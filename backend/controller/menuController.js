import asyncHandler from 'express-async-handler';
import Menu from '../model/menuModel.js';
import cloudinary from '../utils/cloudinary.js';
// @desc Create a new menu item
// @route POST /api/menu
// @access Private
const createMenuItem = asyncHandler(async (req, res) => {
  try {
    const { name, description, price, category, rating, discount } = req.body;

    // Ensure the file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required' });
    }

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'menu-items',
      public_id: `menu_${Date.now()}`,
    });

    // Create the menu item
    const menuItem = await Menu.create({
      name,
      description,
      price,
      category,
      rating,
      discount,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });

    res.status(201).json(menuItem);
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ error: error.message });
  }
});

// @desc Get all menu items
// @route GET /api/menu
// @access Public
const getMenuItems = asyncHandler(async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @desc Get menu items by category
// @route GET /api/menu/category/:category
// @access Public
const getMenuItemsByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;

  try {
    const menuItems = await Menu.find({ category });
    if (menuItems.length === 0) {
      return res.status(404).json({ message: 'No menu items found for this category' });
    }
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @desc Get a single menu item by ID
// @route GET /api/menu/:id
// @access Public
const getMenuItemById = asyncHandler(async (req, res) => {
  const menuItem = await Menu.findById(req.params.id);

  if (menuItem) {
    res.status(200).json(menuItem);
  } else {
    res.status(404).json({ message: 'Menu item not found' });
  }
});

// @desc Update a menu item by ID
// @route PATCH /api/menu/:id
// @access Private
const updateMenuItemById = asyncHandler(async (req, res) => {
  const { name, description, price, category, rating, image,discount } = req.body;

  const menuItem = await Menu.findById(req.params.id);

  if (menuItem) {
    menuItem.name = name || menuItem.name;
    menuItem.description = description || menuItem.description;
    menuItem.price = price || menuItem.price;
    menuItem.discount = discount || menuItem.discount;
    menuItem.category = category || menuItem.category;
    menuItem.rating = rating || menuItem.rating;
    menuItem.image = image || menuItem.image;

    const updatedMenuItem = await menuItem.save();
    res.json(updatedMenuItem);
  } else {
    res.status(404);
    throw new Error('Menu item not found');
  }
});

// @desc Delete a menu item by ID
// @route DELETE /api/menu/:id
// @access Private
const deleteMenuItemById = asyncHandler(async (req, res) => {
  const menuItem = await Menu.findById(req.params.id);

  if (menuItem) {
    await menuItem.remove();
    res.json({ message: 'Menu item removed' });
  } else {
    res.status(404);
    throw new Error('Menu item not found');
  }
});

export {
  createMenuItem,
  getMenuItems,
  getMenuItemsByCategory,
  getMenuItemById,
  updateMenuItemById,
  deleteMenuItemById
};
