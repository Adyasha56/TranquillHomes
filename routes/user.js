const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

//controller of sign up , login and logout is over here. 
//You can change here not in other files

router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup)
);

router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl,
      passport.authenticate("local", {
        failureRedirect: '/login',
        failureFlash: true
      }),
      userController.login
    );
      





router.get("/logout", userController.logout);

/*router.get("/signup", userController.renderSignupForm);
//sign up controller
router.post("/signup", wrapAsync(userController.signup));*/

module.exports = router;
