const express = require("express");

const app = express();
app.set("port", process.env.PORT || 9000);

/////////////////////////////////////////////////////////
// PRIMER RUTA /////////////
/////////////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.send("Welcome to my API!!!!!!!");
});
app.listen(app.get("port"), () => {
  console.log("server runnig on port 9000!!!!!!!!!", app.get("port"));
});
