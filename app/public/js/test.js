$(document).ready(function($) {
	$('#testButton').on('click', function(e){

		console.log("onclicked!");
		$.ajax({
			url: '/api/feedback/add',
			type: 'POST',
			dataType: 'json',
			data: {
				name:"John",
				email:"John@xx.com",
				content:"Hi this is a good app."
			},
		})
		.done(function(d) {
			console.log("success " + JSON.stringify(d));
		})
		.fail(function() {
			console.log("error");
		})
		.always(function(d) {
			console.log("complete" + JSON.stringify(d));
			window.location.reload();
		});
		
	})
});