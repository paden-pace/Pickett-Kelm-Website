// Select all tabs

$( document ).ready(function() {

	console.log("page open");


	$("#sfa").on('click', function(){
		$(this).html("Hello");
		console.log("hello!");
	})

});