// import express framework
const express = require("express");

const router = express.Router();

// import controllers
const fileController = require("./controller");

// get dishes
router.get("/", (req, res) => {
  fileController.readFile((err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(data);
    }
  });
});

// post file
router.post("/", (req, res) => {
    console.log(req.files);
  fileController.saveFile(req.files, (err, files) => {
    if (err) {
        console.log(err)
      res.status(400).json(err);
    } else {
      res.status(200).json(files);
    }
  });
});
module.exports = router;
