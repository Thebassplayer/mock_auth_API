const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3001;
const secretKey = process.env.JWT_SECRET_KEY;

// You can configure the CORS middleware to your needs
const corsOptions = {
  origin: "*", // Allow all origins
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); // Use the CORS middleware
app.use(cookieParser());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = {
      id: "fr6cssdv",
      name: "User Test",
      email: email,
      role: "admin",
    };

    const token = jwt.sign(user, secretKey, { expiresIn: "1h" });

    // Set the token as an httpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    }); // secure flag for HTTPS

    res.json({
      user,
    });
  } else {
    res.status(400).json({ error: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
