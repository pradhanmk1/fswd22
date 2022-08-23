const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/allRoutes");
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());

const db = module.exports =()=>{
  try{
    console.log("before")
    //mongoose.connect('mongodb+srv://cluster0.ck6b0.mongodb.net/realgrande?retryWrites=true&w=majority', { user: process.env.DBUSERNAME, pass: process.env.DBPASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
    //mongoose.connect('mongodb+srv://cluster0.mfa68.mongodb.net/realgrande?retryWrites=true&w=majority', { user: process.env.DBUSERNAME, pass: process.env.DBPASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connect('mongodb+srv://cluster0.gjwgmkw.mongodb.net/realgrande?retryWrites=true&w=majority', { user: process.env.DBUSERNAME, pass: process.env.DBPASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
    
    console.log("MongoDB Connection is Successful")
  } catch(error){
    console.log(error);
    console.log("MongoDB Connection is failed")
  } 
}
db();

app.use(Router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`)
});