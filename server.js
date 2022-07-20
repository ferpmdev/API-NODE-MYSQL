const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");

const routes = require("./routes");

const app = express();
app.set("port", process.env.PORT || 9000);
const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "musimundos",
};

/////////////////////////////////////////////////////////
// MIDDLEWARES /////////////
/////////////////////////////////////////////////////////
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json());

/////////////////////////////////////////////////////////
// PRIMER RUTA /////////////
/////////////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.send("Welcome to my API!!!!!!!");
});

app.use("/api", routes);

/////////////////////////////////////////////////////////
// SERVER RUNNING /////////////
/////////////////////////////////////////////////////////

app.listen(app.get("port"), () => {
  console.log("server runnig on port 9000!!!!!!!!!", app.get("port"));
});

/////////////////////////////////////////////////////////
