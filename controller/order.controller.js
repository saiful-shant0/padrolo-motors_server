const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const result = await Order.save();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.findAllOrder = async (req, res, next) => {
  const email = req.query.email;
  try {
    const result = await Order.find(email ? { email: email } : {});
    if (!result[0]) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't find Order",
      });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't Find the Order",
    });
  }
};
