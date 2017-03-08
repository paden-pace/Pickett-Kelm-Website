// Select all tabs

$( document ).ready(function() {

	console.log("page open");


$("#tab-phil").on('click', function(){
	$("#princ-phil").addClass("active");
	$("#princ-phil").addClass("in");
	$("#princ-kelm").removeClass("active");
	$("#princ-kelm").removeClass("in");
	$("#princ-pickett").removeClass("active");
	$("#princ-pickett").removeClass("in");
	$("#princ-wu").removeClass("active");
	$("#princ-wu").removeClass("in");
	$("#list-phil").addClass("active");
	$("#list-kelm").removeClass("active");
	$("#list-pickett").removeClass("active");
	$("#list-wu").removeClass("active");
	console.log("clicked");
});

$("#tab-pickett").on('click', function(){
	$("#princ-phil").removeClass("active");
	$("#princ-phil").removeClass("in");
	$("#princ-kelm").removeClass("active");
	$("#princ-kelm").removeClass("in");
	$("#princ-pickett").addClass("active");
	$("#princ-pickett").addClass("in");
	$("#princ-wu").removeClass("active");
	$("#princ-wu").removeClass("in");
	$("#list-phil").removeClass("active");
	$("#list-kelm").removeClass("active");
	$("#list-pickett").addClass("active");
	$("#list-wu").removeClass("active");
	console.log("clicked");
});

$("#tab-kelm").on('click', function(){
	$("#princ-phil").removeClass("active");
	$("#princ-phil").removeClass("in");
	$("#princ-kelm").addClass("active");
	$("#princ-kelm").addClass("in");
	$("#princ-pickett").removeClass("active");
	$("#princ-pickett").removeClass("in");
	$("#princ-wu").removeClass("active");
	$("#princ-wu").removeClass("in");
	$("#list-phil").removeClass("active");
	$("#list-kelm").addClass("active");
	$("#list-pickett").removeClass("active");
	$("#list-wu").removeClass("active");
	console.log("clicked");
});

$("#tab-wu").on('click', function(){
	$("#princ-phil").removeClass("active");
	$("#princ-phil").removeClass("in");
	$("#princ-kelm").removeClass("active");
	$("#princ-kelm").removeClass("in");
	$("#princ-pickett").removeClass("active");
	$("#princ-pickett").removeClass("in");
	$("#princ-wu").addClass("active");
	$("#princ-wu").addClass("in");
	$("#list-phil").removeClass("active");
	$("#list-kelm").removeClass("active");
	$("#list-pickett").removeClass("active");
	$("#list-wu").addClass("active");
	console.log("clicked");
});






});