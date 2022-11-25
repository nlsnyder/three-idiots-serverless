const express = require("express");
const { body } = require("express-validator");
const validators = require("../util/validations");
const contactController = require("../controllers/contact-controller");

const router = express.Router();

router.post(
  "/email",
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Email must be a valid email and correctly formatted."),
  body("name")
    .not()
    .isEmpty()
    .withMessage("Name is required.")
    .trim()
    .custom((name) => validators.validateName(name))
    .withMessage("Name should not have any special characters."),
  body("message")
    .not()
    .isEmpty()
    .withMessage("Message is required.")
    .escape()
    .isLength({ min: 5, max: 400 })
    .withMessage(
      "Message cannot be less than 5 characters and cannot be more than 400 characters."
    ),
  contactController.emailContactForm
);

module.exports = router;
