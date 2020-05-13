const bicycleMongooseModel = require("./schemas/bicycleSchema");
const { Types } = require("mongoose");

exports.getAllBicycles = async () => {
  return await bicycleMongooseModel.find();
};

exports.addNewBicycle = async newBicycleData => {
  const bicycleMongooseObject = new bicycleMongooseModel({
    bicycle_name: newBicycleData.bicycle_name,
    bicycle_type: newBicycleData.bicycle_type,
    bicycle_rent_price: newBicycleData.bicycle_rent_price
  });

  return await bicycleMongooseObject.save();
};

exports.deleteBicycle = async bicycleId => {
  const queryResult = await bicycleMongooseModel.deleteOne({ _id: new Types.ObjectId(bicycleId) });
  if (!queryResult.deletedCount) throw new Error("no rent entry was found to delete");
  return bicycleId;
};
