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
    .then(([user]) => {
      // compare the password the hash stored in the database
      if (user && bcryptjs.compareSync(diner_password, user.diner_password)) {
        const token = makeToken(user);

        res.status(200).json({
          token,
          diner_username: user.diner_username,
          diner_id:user.diner_id,
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

const makeToken = (user) => {
  const payload = {
    subject: user.diner_id,
    username: user.diner_username,
  };
  const options = {
    expiresIn: "1hr",
  };
  return jwt.sign(payload, jwtSecret, options);
};

module.exports = router;
