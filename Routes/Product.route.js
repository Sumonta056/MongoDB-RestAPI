const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  next(new Error("Cannot get all products"));
  res.send("get : all products");
});

router.post("/", (req, res, next) => {
  const products = req.body;
  res.send(`Post Product : ${products.name}`);
});

router.get("/:id", (req, res, next) => {
  const productsID = req.params.id;
  res.send(`get : product with id ${productsID}`);
});

module.exports = router;
