const bicycleModel = require("../models/bicycleModel");
const handleServerError = require("../helpers/serverErrorHandler");

exports.getAllBicycles = async (req, res) => {
  try {
    const bicyclesData = await bicycleModel.getAllBicycles();
    res.send(bicyclesData);
  } catch (error) {
    handleServerError(error, res);
  }
};

exports.addNewBicycle = async (req, res) => {
  try {
    const newBike = await bicycleModel.addNewBicycle({
      bicycle_name: "test name MODEL",
      bicycle_type: "test type",
      bicycle_rent_price: 20.22
    });
    res.status(200).send(JSON.stringify(newBike));
  } catch (error) {
    handleServerError(error, res);
  }
};

exports.deleteBicycle = async (req, res) => {
  try {
    await bicycleModel.deleteBicycle("5eba76a67f0c3f6afd3ab5af");
    res.sendStatus(200);
  } catch (error) {
    handleServerError(error, res);
  }
};
