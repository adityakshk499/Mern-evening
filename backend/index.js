const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri =
  "mongodb+srv://aditya:aditya@cluster0.htk0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get(
  "/about/:age",
  (req, res, next) => {
    console.log(req.params);
    if (req.params.age > 18) {
      next();
    } else {
      res.send("U are below 18    ");
    }
  },
  (req, res) => {
    res.send("Hello About");
  }
);

app.listen(3001, () => {
  mongoose
    .connect(uri)
    .then((response) => {
      console.log("DB CONNECT SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("App is listening");
});
