const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { uploadSingle } = require("../middlewares/multer");

router.get("/dashboard", adminController.viewDashboard);
// Category Route
router.get("/category", adminController.viewCategory);
router.put("/category", adminController.updateCategory);
router.post("/category", adminController.addCategory);
router.delete("/category/:id", adminController.destroyCategory);

// Bank Route
router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.get("/bank", adminController.viewBank);
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);

module.exports = router;
