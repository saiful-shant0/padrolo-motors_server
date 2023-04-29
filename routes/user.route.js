const userController = require("../controller/user.controller");
const verifyToken = require("../utilities/verifytoken");
const router = require("express").Router();

router
  .route("/")
  .post(userController.createUser)
  .put(userController.updateUser);


router.route("/admin").put(verifyToken, userController.makeUserAdmin); 
router.route("/:email").put(verifyToken, userController.getUserAdminStatus);

module.exports = router;
