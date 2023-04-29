const express = require("express");
const app = express();
const cors = require("cors");
const bikeRoute = require("./routes/bike.route");
const userRoute = require("./routes/user.route");
const orderRoute = require("./routes/order.route");
const reviewRoute = require("./routes/review.route");

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
app.use("/api/v1/bike", bikeRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/review", reviewRoute);

module.exports = app;
