const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const mainRouter = require("./router/rounter");
app.use(["/"], mainRouter);
app.use(express.json());
app.listen(8080);

mongoose
  .connect(
    "mongodb+srv://adminas1:adminas1@cluster0.rp0hg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Alles gud database is running");
  })
  .catch((e) => {
    console.log(e);
  });


