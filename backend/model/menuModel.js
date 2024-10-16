
import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    default: '0'
  },
  reviews: {
    type: Number,
    default: 0
  },
  image: {
    public_id: {
      type: String,

    },
    url: {
      type: String,

    }
  },
  discount: Number,
  category: {
    type: String,
    required: true, // Makes category required
    
  },
}, {
  timestamps: true
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
