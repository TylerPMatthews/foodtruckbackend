const bcryptjs = require("bcryptjs");
const router = require("express").Router();
const Diner = require("./Diner-Model");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secret");

//Register
router.post("/register", async (req, res) => {
  const credentials = req.body;

  const hashRounds = 8;

  //hashing the pass
  const hash = bcryptjs.hashSync(credentials.diner_password, hashRounds);
  credentials.diner_password = hash;

  //save the user to the database

  await Diner.post(credentials)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

//Login

router.post("/login", (req, res) => {
  const { diner_username, diner_password } = req.body;

  Diner.findBy({ diner_username: diner_username })
    .then((user) => {
      //compare password to hash
      if (user && bcryptjs.compareSync(diner_password, user.password)) {
        const token = makeToken(user);
        res.status(200).json({
          message:
            "Welcome back to the API" + "" + user.username,
          token,
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

const makeToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "1hr",
  };
  return jwt.sign(payload, jwtSecret, options);
};

module.exports = router;
