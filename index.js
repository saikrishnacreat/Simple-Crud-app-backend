const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js")
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose
  .connect(
    "mongodb+srv://saikrishnaask191:4lInbAZOw8RXsVb7@cluster0.v0nrg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"))
  .catch(() => {
    console.log("Not connected!!");
  });

//routes
app.use("/api/products",productRoute)

  app.get("/", (req, res) => {
  res.send("Hello from node API Server");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
