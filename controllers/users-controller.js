const { uuid } = require("uuidv4");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const DUMMY_USERS = [
  {
    id: "u1",
    name: "Oumaima sb",
    email: "test@test.com",
    password: "testers",
  },
];

const getUsers = (req, res) => {
  res.json({ users: DUMMY_USERS });
};

const singup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed", 422);
  }

  const { name, email, password } = req.body;
  const hasUser = DUMMY_USERS.find((u) => u.email === email);
  if (hasUser) {
    throw new HttpError("Email already exists", 422);
  }
  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };
  DUMMY_USERS.push(createdUser);
  res.status(201).json({ user: createdUser });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const indentifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (!indentifiedUser || indentifiedUser.password !== password) {
    throw new HttpError("Could not identify user", 401);
  }
  res.json({ message: "Logged in" });
};

exports.getUsers = getUsers;
exports.singup = singup;
exports.login = login;
