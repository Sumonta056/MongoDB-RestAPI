const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("get : all products");
});

router.post("/", (req, res, next) => {
  res.send("post : all products");
});

module.exports = router;
