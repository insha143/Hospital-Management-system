// uploads.jsx
const multer = require('multer');
const path = require('path');

// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads')); // Ensure this path is correct
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Name the file with a timestamp
    }
});

// Create the multer instance
const upload = multer({ storage: storage });

// Export the upload middleware
module.exports = upload;
