const bicycleModel = require("../models/bicycleModel");
const handleServerError = require("../helpers/serverErrorHandler");

exports.getAllBicycles = async (req, res) => {
  try {
    const bicyclesData = await bicycleModel.getAllBicycles();
    setTimeout(() => {
      res.send(bicyclesData);
    }, 500);
  } catch (error) {
    handleServerError(error, res);
  }
};

exports.addNewBicycle = async (req, res) => {
  try {
    const newBike = await bicycleModel.addNewBicycle({
      bicycle_name: req.body.bikeName,
      bicycle_type: req.body.bikeType,
      bicycle_rent_price: req.body.rentPrice
    });
    setTimeout(() => {
      res.status(200).send(newBike);
    }, 500);
  } catch (error) {
    handleServerError(error, res);
  }
};

exports.deleteBicycle = async (req, res) => {
  try {
    await bicycleModel.deleteBicycle(req.params.bicycleId);
    setTimeout(() => {
      res.sendStatus(200);
    }, 500);
  } catch (error) {
    handleServerError(error, res);
  }
};
