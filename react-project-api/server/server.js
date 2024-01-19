const express = require("express");
const app = express();

// set up a route for the api
app.get("/api", (req, res) => {
  // backend api
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

// practice
app.get("/test", (req, res) => {
  res.json({ vehicles: ["bmw", "audi", "jaguar", "mazda", "mercedes"] });
});

// start backend on port 5000
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
