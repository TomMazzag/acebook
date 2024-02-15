const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "acebook",
  },
  // filename: function (req, file, cb) {
  //   cb(null, Date.now() + "-" + file.originalname); // Set unique filenames
  // },
});

const upload = multer({ storage: storage });

module.exports = upload;
