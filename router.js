const router = require("express").Router();

const bicycleController = require("./controllers/bicycleController");
const rentController = require("./controllers/rentController");

router.get("/bicycle_get_all", (req, res) => bicycleController.getAllBicycles(req, res));
router.post("/bicycle_add_new", (req, res) => bicycleController.addNewBicycle(req, res));
router.delete("/bicycle_delete/:bicycleId", (req, res) => bicycleController.deleteBicycle(req, res));
router.put("/rent_bicycle/:bicycleId", (req, res) => rentController.rentBicycle(req, res));
router.put("/rent_bicycle_cancel/:bicycleId", (req, res) => rentController.rentBicycleCancel(req, res));

module.exports = router;
