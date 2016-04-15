var express = require("express");
var router = express.Router();
var _ = require("lodash");
var uuid = require("node-uuid");
var moment = require("moment");

var feedbackData = require("../../feedback-data.json");

router.get('/getall', function(req, res){
	res.json(feedbackData);
	
});

router.get('/getalltestview', function(req, res){
	res.render('feedback', {feedbacks : feedbackData});

});

router.get('/getbyname/:name', function(req, res){
	var nameToSearch = req.params.name;
	var feedback = _.find(feedbackData, function(o){
		return o.name.toLowerCase() === nameToSearch.toLowerCase();
		// return o.name === nameToSearch;
	});

	if (!feedback) {
		res.sendStatus(404);
		return;
	};

	res.json(feedback);
});

router.get('/deletebyid/:id', function(req, res){
	var id = req.params.id;
	var feedback = _.find(feedbackData, function(o){
		return o.id === id;
	});

	if (!feedback) {
		res.sendStatus(404);
		return;
	};

	feedbackData = _.filter(feedbackData, function(o) {
		return o.id !== id;
	});

	res.json({status:"Success"});
});

router.post('/add', function(req, res){
	if(req.body.name && req.body.email && req.body.content){
		var id = uuid.v4();
		var momt = moment();

		var feedback = {
			name  : req.body.name,
			email : req.body.email,
			content  : req.body.content,
			moment : momt,
			id : id
		}

		feedbackData.push(feedback);

		res.json({status:"success", body : { id : id}});
	}
	else {
		res.json({status:"add failed!"});
	}
});


module.exports = router;