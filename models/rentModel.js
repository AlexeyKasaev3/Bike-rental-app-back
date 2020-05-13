const { Types } = require("mongoose");
const rentMongooseModel = require("./schemas/rentSchema");

exports.rentBicycle = async bicycleId => {
  const rentBicycleMongooseObject = new rentMongooseModel({
    rent_start_time: Date.now(),
    bicycle_id: new Types.ObjectId(bicycleId)
  });
  return await rentBicycleMongooseObject.save();
};

exports.rentBicycleCancel = async bicycleId => {
  const queryResult = await rentMongooseModel.deleteOne({ bicycle_id: new Types.ObjectId(bicycleId) });
  if (!queryResult.deletedCount) throw new Error("no rent entry was found to delete");
  return bicycleId;
};
