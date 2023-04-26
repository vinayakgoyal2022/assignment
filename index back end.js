const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");

const Port = 3000;

app.use(bodyparser.json());

// validation of data
app.post(
  "/form",
  [
    check("password", "password length should be 8 char long").isLength({
      min: 8,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    //check foe error and response to frontend dev

    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      res.send("all information is validated");
    }

    // create token
    const token = jwt.sign({ name: req.body.name }, vinayak);
  }
);

app.get("/signedin", (req, res) => {
  res.json({
    name: name,
    email: email,
  });
});

app.listen(Port, function (error) {
  if (error) {
    return "error";
  }
  console.log("server is running at port", port);
});
