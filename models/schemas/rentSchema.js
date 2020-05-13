const { Schema, model } = require("mongoose");

const rentSchema = new Schema({
  rent_start_time: { type: Number, required: true },
  bicycle_id: { type: Schema.Types.ObjectId, required: true }
});

module.exports = model("rentModel", rentSchema);
