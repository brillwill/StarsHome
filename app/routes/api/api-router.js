var express = require("express");
var router = express.Router();

var feedbackRouter = require("./feedback-router");

module.exports = router;

router.use("/feedback", feedbackRouter);