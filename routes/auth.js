const router = require('express').Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  const { error } = registerValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const emailExists = await User.findOne({ email: req.body.email });

  if (emailExists) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    pronouns: req.body.pronouns,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch(err) {
    res.status(400).send(err);
  }
});

module.exports = router;