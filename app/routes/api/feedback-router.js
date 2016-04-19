var express = require("express");
var router = express.Router();
var _ = require("lodash");
var uuid = require("node-uuid");
var moment = require("moment");
var auth = require("../../auth");
var moment = require('moment');

var feedbackData = null; //require("../../feedback-data.json");

var Feedback = require("../../model/feedback");


router.get('/getall', function(req, res){
	Feedback.find(function(err, allFeedbacks){
		if (err) {
			res.sendStatus(404);
		}
		else {
			res.json(allFeedbacks);
		}
	});
	
});

router.get('/getalltestview', auth.authenticator ,function(req, res){
	Feedback.find(function(err, allFeedbacks) {
		res.render('feedback', {feedbacks : allFeedbacks});	
	});

	// Feedback.find(function(err, allFeedbacks) {
	// 	if (allFeedbacks.length == 0) {
	// 		//initialize Feedback data
	// 		var f1 = Feedback.create({
	// 				name: "Abel Green",
	// 				email: "abel@x.com",
	// 				content: "This is a good idea!",
	// 				moment: moment().format()
	// 			},
	// 			function(err, data) {
	// 				if (err) {
	// 					console.log('Err:' + err);
	// 				} else {
	// 					console.log(data);
	// 				}
	// 			});

	// 		res.json({status:"no records, sample added"});
	// 	}else {
	// 		res.render('feedback', {feedbacks : allFeedbacks});
	// 	};
	// });
	
});

router.get('/getbyemail/:email', function(req, res){
	var emailToSearch = req.params.email;

	Feedback.find({email : emailToSearch}, function(err, feedback){
		if (err) {
			res.sendStatus(404);
		}
		else {
			res.json(feedback);
		}
	});
});

router.get('/getbyid/:id', function(req, res){
	var idToSearch = req.params.id;

	Feedback.findById(idToSearch, function(err, feedback){
		if (err) {
			res.sendStatus(404);
		}
		else {
			res.json(feedback);
		}
	});
});

router.get('/deletebyid/:id', function(req, res){
	var idToSearch = req.params.id;

	Feedback.findByIdAndRemove(idToSearch, function(err, feedback){
		if (err) {
			res.sendStatus(404);
		}
		else {
			res.json({stats:"success", body : {id : idToSearch}});
		}
	});
});

router.post('/add', function(req, res){
	if(req.body.name && req.body.email && req.body.content){
		// var id = uuid.v4();
		var momt = moment();
		var success = "success";

		var feedback = new Feedback({
			name  : req.body.name,
			email : req.body.email,
			content  : req.body.content,
			moment : momt.format()
			// id : id
		}, function(err, data) {
			success = 'add fail - creation failure.'
		});


		feedback.save(function(error){
			if (error) {
				success = 'add fail! - save err:' + error;	
			};
		})
		// feedbackData.push(feedback);

		res.json({status:success, body : { id : feedback._id}});
	}
	else {
		res.json({status:"add failed! - Invalid arguments."});
	}
});


module.exports = router;