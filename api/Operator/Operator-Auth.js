const bcryptjs = require("bcryptjs");
const router = require("express").Router();
const Operator = require("./Operator-Model");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secret");

//Register
router.post("/register", async (req, res) => {
  const credentials = req.body;

  const hashRounds = 8;

  //hashing the pass
  const hash = bcryptjs.hashSync(credentials.operator_password, hashRounds);
  credentials.operator_password = hash;

  //save the user to the database

  await Operator.post(credentials)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

//Login

router.post("/login", (req, res) => {
  const { operator_username, operator_password } = req.body;

  Operator.findBy({ operator_username: operator_username })
    .then(([user]) => {
      // compare the password the hash stored in the database
      if (
        user &&
        bcryptjs.compareSync(operator_password, user.operator_password)
      ) {
        const token = makeToken(user);

        res.status(200).json({
          token,
          operator_username: user.operator_username,
          operator_id:user.operator_id,
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
    subject: user.operator_id,
    username: user.operator_username,
  };
  const options = {
    expiresIn: "1hr",
  };
  return jwt.sign(payload, jwtSecret, options);
};

module.exports = router;
