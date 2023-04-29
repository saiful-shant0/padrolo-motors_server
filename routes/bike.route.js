const bikeController = require("../controller/bike.controller");
const verifyToken = require("../utilities/verifytoken");
const router = require("express").Router();

router
  .route("/")
  .post(verifyToken, bikeController.createBike)
  .get(bikeController.findAllBike);

router
  .route("/:id")
  .get(bikeController.findById)
  .delete(verifyToken, bikeController.deleteById);

module.exports = router;
