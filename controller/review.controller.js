const Review = require("../models/Review");
exports.createReview = async (req, res) => {
  try {
    await Review.create(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully created the Review",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
