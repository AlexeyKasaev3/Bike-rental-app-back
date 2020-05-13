const rentModel = require("../models/rentModel");
const handleServerError = require("../helpers/serverErrorHandler");

exports.rentBicycle = async (req, res) => {
  try {
    await rentModel.rentBicycle(req.params.bicycleId);
    res.sendStatus(200);
  } catch (error) {
    handleServerError(error, res);
  }
};

exports.rentBicycleCancel = async (req, res) => {
  try {
    await rentModel.rentBicycleCancel(req.params.bicycleId);
    res.sendStatus(200);
  } catch (error) {
    handleServerError(error, res);
  }
};
