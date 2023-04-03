const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { uploadSingle, uploadMultiple } = require("../middlewares/multer");

router.get("/dashboard", adminController.viewDashboard);
// Category Route
router.get("/category", adminController.viewCategory);
router.put("/category", adminController.updateCategory);
router.post("/category", adminController.addCategory);
router.delete("/category/:id", adminController.destroyCategory);

// Bank Route
router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank", uploadSingle, adminController.updateBank);
router.delete("/bank/:id", adminController.destroyBank);

// Item Route
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.get("/booking", adminController.viewBooking);

module.exports = router;
