const express = require('express');
const app = express();
const router = express.Router();
const Royal = require("../Model/userSchema")
const Royalsub = require("../Model/subSchema");
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})
require("../db/conn");
const port = process.env.PORT || 5000;
const path = require("path")

app.use(express.json());

app.use(router);



// const nodemailer = require("nodemailer");



router.post("/register", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res
      .status(422)
      .json({ error: "Something missing please fill the fields correctly" });
  }

  if (phone.toString().length < 9) {
    return res
      .status(423)
      .json({ error: "Phone number should be at least 10 digits long" });
  }

  try {
    // check if email is valid
    const isValidEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
    if (!isValidEmail) {
      return res.status(404).json({ error: "Please enter a valid email address" });
    }
    const existingUser = await Royal.findOne({ email: email, phone: phone });
    if (!existingUser) {
      const user = new Royal({ name, email, phone, message });
      await user.save();
      return res.status(201).json({ message: "Information Sent Successfully" });
    } else {
      const newUser = new Royal({ name, email, phone, message });
      await newUser.save();
      return res.status(201).json({ message: "Information Sent Successfully" });
    }
    
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Failed to register user. Please try again later." });
  }
});




router.post("/subscribe", async (req, res) => {

  const {email, } = req.body;

  if (!email) {
    return res.status(422).json({ error: "Something missing please fill the fields correctly" });
  }

  // Check if the email is in a valid format
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (email && !emailRegex.test(email)) {
    return res.status(404).json({ error: "Invalid email format" });
  }

  try {
    const existingUser = await Royalsub.findOne({ email: email });
    if (existingUser) {
      return res.status(423).json({ error: "You are already subscribed" });
    }

    const user = new Royalsub({ email });
    await user.save();

    res.status(201).json({ message: "Information sent successfully" });
  } catch (error) {
    console.log(error);
  }
});


app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
});
