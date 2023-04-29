const reviewController = require("../controller/review.controller");
const router = require("express").Router();

router
  .route("/")
  .post(reviewController.createReview)
  .get(reviewController.getReviews);

module.exports = router;
