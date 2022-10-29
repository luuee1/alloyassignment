const express = require("express");
const bodyParser = require("body-parser");
const sdk = require('api')('@alloy-public/v1.0#qzpq7nl9iv368f');
const https = require("https");

const app = express();

sdk.auth('Basic {base64_encode({token}:{secret}');
sdk.post('/evaluations')
  .then(res => console.log(res))
  .catch(err => console.error(err));

const request = require("request");

request(
  {
    url: "https://sandbox.alloy.co/v1/evaluations/",
    headers: {
      Authorization: "Basic {base64_encode({token}:{secret}",
    },
  },
  function (err, res) {
    if (err) {
      console.error(err);
    } else {
      console.log(res.body);
    }
  }
);

app.use(bodyParser.urlencoded({extended: true}));

app.get("/api", function(req, res){
    res.json(__dirname + "/Form.jsx");
});

app.listen(5000, function(req, res){
    console.log("Server is running on port 5000.");
});