const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    pronouns: req.body.pronouns,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch(err) {
    res.status(400).send(err);
  }
});

module.exports = router;