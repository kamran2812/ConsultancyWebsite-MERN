const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      required: true,
      unique: true, // to ensure that no two users have the same email
      validate: {
          validator: function (value) {
              return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
          },
          message: "Please enter a valid email address",
      },
  },
  phone: {
      type: Number,
      required: true,

  },
  message: {
      type: String,
  },
  
});

  





//now we need to create a collections
const Royal = new mongoose.model("royaluser",userSchema);
module.exports = Royal;


