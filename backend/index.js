const express = require("express");
const dbConnect = require("./dbConfiq/dbConnect");
const route = require("./routes");
const app = express();
require("dotenv").config();
dbConnect();
app.use(express.json());

app.use("/", route);

app.use("/", (req, res) => {
  res.send("Route Does not match , Please check");
});

app.listen(3000, () => {
  console.log("Database is connected port number 3000");
});
