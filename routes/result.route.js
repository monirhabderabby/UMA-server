const express = require("express");

const result = express();

const multer = require("multer");
const path = require("path");
const { urlencoded } = require("express");
const { importResult } = require("../controller/result.controller");

result.use(urlencoded({ extended: true }));
result.use(express.static(path.resolve(__dirname, "public")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

result.post("/importResult", upload.single("file"), importResult);

module.exports = result;
