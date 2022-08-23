const express = require("express");
const {Houses,Enquiries,Users} = require("../models/housesSchema");
const app = express();

app.get("/", async (request, response) => {
  const houses = await Houses.find({});

  try {
    response.send(houses);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/searchresults/:county", async (request, response) => {
    const houses = await Houses.find({county:request.params.county});
    try {
      response.send(houses);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/searchresults/:id", async (request, response) => {
  const houses = await Houses.find({_id:request.params.id});
  try {
    response.send(houses);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/usercheck", async (request, response) => {
  const user = await Users.find({email:request.query.email});
  try {
    response.send(user);
    console.log(user);
  } catch (error) {
    response.status(500).send(error);
  }
});


app.post("/register", async (req, resp) => {
  try {
      const enquiry = new Enquiries(req.body);
      let result = await enquiry.save();
      result = result.toObject();
      if (result) {
          resp.send(req.body);
          console.log(result);
      } else {
          console.log("could not store enquiry");
      }

  } catch (e) {
      resp.status().send(e);
  }
});

app.post("/signup", async (req, resp) => {

  try {
    
    const user = new Users(req.body);
      let result = await user.save();
      result = result.toObject();
      if (result) {
          resp.send(req.body);
          console.log(result);
      } else {
          console.log("User is not created");
      }

  } catch (e) {
    resp.status(464).send("Email Already Exists");
  }
});

app.post("/login", async (req, resp) => {
  try {
    const result = await Users.findOne({$and:[{email:req.body.email},{pass:req.body.pass}]});
    if (result) {
          resp.send(req.body);
          console.log(result);
      } else {
          console.log("Check login credentials");
      }

  } catch (e) {
    resp.send("Login Failed");
  }
});

module.exports = app;