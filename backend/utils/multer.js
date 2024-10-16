import multer from 'multer';
import path from 'path';

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure the 'uploads' folder exists
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Name the file uniquely
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/; // Allowed extensions
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images are allowed (jpeg, jpg, png)'));
    }
  },
});

// Export using ES Modules syntax
export default upload;
