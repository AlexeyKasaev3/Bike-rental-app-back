const rentModel = require("../models/rentModel");
const handleServerError = require("../helpers/serverErrorHandler");

exports.rentBicycle = async (req, res) => {
  try {
    const newRentEntryData = await rentModel.rentBicycle("5eba984e0267fc2486b2b70d");
    console.log(newRentEntryData);
    res.send(newRentEntryData);
  } catch (error) {
    handleServerError(error, res);
  }
};

exports.rentBicycleCancel = async (req, res) => {
  try {
    const canceledBycicleId = await rentModel.rentBicycleCancel("5eba984e0267fc2486b2b70d");
    res.send({ canceledBycicleId });
  } catch (error) {
    handleServerError(error, res);
  }
};
