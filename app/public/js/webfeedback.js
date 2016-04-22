$(function(){

	var orginalModalContent = $("#fbmodalbody").children();

	$("#fberroralert").hide();

	$("#fbsubmit").click(function(){

		var namevalue = $("#fbname").val();
		var emailvalue = $("#fbemail").val();
		var contentvalue = $("#fbcontent").val();

		$.ajax({
			url: '/api/feedback/add',
			type: 'POST',
			dataType: 'json',
			data: {name: namevalue, email:emailvalue, content:contentvalue}
		})
		.done(function() {
			$("#fbmodalbody").empty();
			$("#fbmodalbody").append($("<div class='alert alert-success'>提交成功，谢谢你的留言！</div>"));
			$('#fbsubmit').hide();
		})
		.fail(function() {
			$("#fberroralert").show();
		})
		.always(function() {
			console.log("complete");
		});

		$('#fbsubmit').addClass('disabled');
		
	});

	$("#fbmodal").on("hidden.bs.modal", function(){
		$("#fbmodalbody").empty();
		$("#fbmodalbody").append(orginalModalContent[0]);
		$('#fbsubmit').show();
		$('#fbsubmit').removeClass('disabled');
		$("#fberroralert").hide();

		$("#fbname").val("");
		$("#fbemail").val("");
		$("#fbcontent").val("");
	});

});