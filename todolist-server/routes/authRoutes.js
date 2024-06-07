const router = require("express").Router();
const jwt = require("jsonwebtoken");

const users = [];
let id = 1;

// register
router.post("/register", (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = {
      id,
      username,
      password,
    };
    id += 1;
    users.push(newUser);
    res.send(`${username} registration completed`);
  } catch (e) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// login => generate access token
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => {
    return user.username === username;
  });

  if (!user) {
    return res.status(400).send("User not found");
  }

  if (user.password !== password) {
    return res.status(400).send("Passwords do not match");
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.send({ token });
});

module.exports = router;
