const orderController = require("../controller/order.controller");
const router = require("express").Router();

router
  .route("/")
  .post(verifyToken, orderController.createOrder)
  .get(verifyToken, orderController.findAllOrder);

module.exports = router;
