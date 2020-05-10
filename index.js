const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();

const portToListen = 3000;

app.use(cors());

app.use(router);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  if (req.xhr) {
    res.sendStatus(500);
  } else {
    next(err);
  }
});

app.listen(portToListen, () => console.log(`Server is listening at ${portToListen} port`));
