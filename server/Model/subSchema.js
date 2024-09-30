const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({
    email: {
      type: String,
      // add email validation
      validate: {
        validator: function (value) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
        },
        message: "Please enter a valid Gmail address",
      },
    },
  });
  





//now we need to create a collections
const Royalsub = new mongoose.model("Clientsubscribe",subSchema);
module.exports = Royalsub;


