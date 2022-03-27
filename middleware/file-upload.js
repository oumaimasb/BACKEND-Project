const multer = require("multer");
const uuid = require("uuid");

const { v1: uuidv1 } = require("uuid");

const MINE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};
const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/images");
    },
    filename: (req, file, cb) => {
      const ext = MINE_TYPE_MAP[file.minetype];
      cb(null, uuid() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MINE_TYPE_MAP[file.minetype];
    let error = isValid ? null : new Error("Invalid mine type !");
    cb(error, isValid);
  },
});
module.exports = fileUpload;
