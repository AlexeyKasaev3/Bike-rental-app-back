const rentModel = require("../models/rentModel");
const handleServerError = require("../helpers/serverErrorHandler");

exports.rentBicycle = async (req, res) => {
  try {
    const rentStartTime = Date.now();
    await rentModel.rentBicycle(req.params.bicycleId, rentStartTime);
    setTimeout(() => {
      res.status(200).send({ rentStartTime });
    }, 500);
  } catch (error) {
    handleServerError(error, res);
  }
};

exports.rentBicycleCancel = async (req, res) => {
  try {
    await rentModel.rentBicycleCancel(req.params.bicycleId);
    setTimeout(() => {
      res.sendStatus(200);
    }, 500);
  } catch (error) {
    handleServerError(error, res);
  }
};
