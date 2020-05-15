const { Types } = require("mongoose");
const bicycleMongooseModel = require("./schemas/bicycleSchema");

exports.rentBicycle = async (bicycleId, rentStartTime) => {
  return await bicycleMongooseModel.updateOne(
    { _id: new Types.ObjectId(bicycleId) },
    { rent_start_time: rentStartTime }
  );
};

exports.rentBicycleCancel = async bicycleId => {
  await bicycleMongooseModel.updateOne({ _id: new Types.ObjectId(bicycleId) }, { $unset: { rent_start_time: 1 } });
};
