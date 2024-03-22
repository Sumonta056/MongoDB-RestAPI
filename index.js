// Importing  Pre
const express = require("express");
const app = express();

// Product routes
const productRouter = require("./Routes/Product.route.js");
app.use("/products", productRouter);

// Main Router
app.get("/", (req, res, next) => {
  res.send("Hello World");
});

// Start Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("MongdDB is available !!");
});
