var express = require("express");
var router = express.Router();

var feedbackAPI = require("./feedback-api");

module.exports = router;

router.use("/feedback", feedbackAPI);