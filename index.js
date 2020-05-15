const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");

const app = express();

const portToListen = 4400;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use((req, res, next) => res.sendStatus(404));
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.sendStatus(500);
});

async function startServer() {
  try {
    await mongoose.connect("mongodb+srv://UserName:1q2w3e4rz@cluster0-pifgx.mongodb.net/bike-rental", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    app.listen(portToListen, () => console.log("Server has been started"));
  } catch (error) {
    console.log(error);
  }
}

startServer();
