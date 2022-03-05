const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const usersController = require("../controllers/users-controller");

router.get("/", usersController.getUsers);

router.post(
  "/singup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(), // Test@test.com => test@test.com
    check("password").isLength({ min: 6 }),
  ],
  usersController.singup
);

router.post("/login", usersController.login);

module.exports = router;
