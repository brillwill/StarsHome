$(document).ready(function($) {
	$('#testButton').on('click', function(e){

		console.log("onclicked!");
		// $.ajax({
		// 	url: '/api/feedback/add',
		// 	type: 'POST',
		// 	dataType: 'json',
		// 	data: {
		// 		name:"John",
		// 		email:"John@xx.com",
		// 		content:"Hi this is a good app."
		// 	},
		// })
		// .done(function(d) {
		// 	console.log("success " + JSON.stringify(d));
		// })
		// .fail(function() {
		// 	console.log("error");
		// })
		// .always(function(d) {
		// 	console.log("complete" + JSON.stringify(d));
		// 	window.location.reload();
		// });
		
		$.ajax({
			url: '/auth/logout',
			type: 'GET',
			dataType: 'json',
			data: null,
		})
		.done(function() {
			console.log("logout success");
		})
		.fail(function(obj) {
			console.log("logout error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});


	$("#loginButton").on('click', function(e){
		console.log('login button clicked');
		$.ajax({
			url: '/auth/login',
			type: 'POST',
			dataType: 'text',
			data:$("#loginform").serialize(),
		})
		.done(function() {
			console.log("success login");
			window.location.assign("/api/feedback/getalltestview");
		})
		.fail(function() {
			console.log("error login");
			$("#loginfailbanner").removeClass("hidden");
		})
		.always(function() {
			console.log("complete login");
		});
	});

});