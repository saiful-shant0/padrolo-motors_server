const Bike = require("../models/Bike");

exports.createBike = async (req, res, next) => {
    try {
      await Bike.create(req.body);
  
      res.status(200).json({
        status: "success",
        message: "Successfully created the Bike",
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error: "Couldn't create the Bike",
      });
    }
  };

  exports.findAllBike = async (req, res, next) => {

    try {
      const result = await Bike.find({});
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error: "Couldn't Find the Bike",
      });
    }
  };

  exports.findById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await Bike.findOne({ _id: id });
      if (!result) {
        return res.status(400).json({
          status: "fail",
          error: "Couldn't find a Bike with this id",
        });
      }
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error: "Couldn't find a Bike with this id",
      });
    }
  };


exports.deleteById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await Bike.findOneAndDelete({ _id: id });
      if (!result) {
        return res.status(400).json({
          status: "fail",
          error: "Couldn't find a Bike with this id",
        });
      }
      res.status(200).json({
        status: "Success",
        error: "Delete Successfully",
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error: "Couldn't find a Bike with this id",
      });
    }
  };
  