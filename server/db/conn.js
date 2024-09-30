const mongoose = require("mongoose");
const dotenv = require("dotenv")
const mongodeb = process.env.DATABASE;
mongoose.set('strictQuery', true);
mongoose.connect(mongodeb,{ useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false},)
.then(()=>{
    console.log("connection successfull...")
})
.catch(err => console.log(err));