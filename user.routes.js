const express = require("express");
const UserRouter = express.Router();
const { body } = require("express-validator");
const { RegisterUser } = require("./controller/user.controller");

UserRouter.post(
  "/register",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("Enter a valid name"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be of 6 characters"),
  ],
  RegisterUser
);

module.exports = UserRouter;
