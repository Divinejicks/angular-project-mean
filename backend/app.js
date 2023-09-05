const path = require("path");
const express = require('express');
const mongoose = require('mongoose')

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

//Connecting to mongodb atlast
mongoose.connect("mongodb+srv://cho:" + process.env.MONGO_ATLAS_PW + "@cluster0.s7bdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to the database");
  }).catch(() => {
    console.log("Connection failed");
  })

//To get the body property of the request
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/images", express.static(path.join("backend/images")));

//To connect angular to the backend
app.use((req,res,next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, PATCH, DELETE, OPTIONS")

  next();
})

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app
