import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    if (!file || !file.originalname) {
      return callback(new Error("No file provided or file missing 'originalname'"), null);
    }
    
    // If file is present, generate the filename
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload;
