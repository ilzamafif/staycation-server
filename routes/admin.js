const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { uploadSingle, uploadMultiple } = require("../middlewares/multer");
const auth = require("../middlewares/auth");

router.get("/signin", adminController.viewSignin);
router.post("/signin", adminController.actionSignin);
router.use(auth);

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
router.get("/item/show-image/:id", adminController.showImageItem);
router.get("/item/:id", adminController.showEditItem);
router.put("/item/:id", uploadMultiple, adminController.editItem);
router.delete("/item/:id/delete", adminController.destroyItem);

// Item Detail Route
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);
router.post("/item/add/feature", uploadSingle, adminController.addFeature);
router.put("/item/update/feature", uploadSingle, adminController.editFeature);
router.delete(
  "/item/:itemId/feature/:id",
  uploadSingle,
  adminController.deleteFeature
);

router.post("/item/add/activity", uploadSingle, adminController.addActivity);
router.put("/item/update/activity", uploadSingle, adminController.editActivity);
router.delete(
  "/item/:itemId/activity/:id",
  uploadSingle,
  adminController.deleteActivity
);

router.get("/booking", adminController.viewBooking);

module.exports = router;
