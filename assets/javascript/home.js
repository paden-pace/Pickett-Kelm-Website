// Select all tabs
var homeImages1 = ["assets/images/home/build2.jpg", 
			"assets/images/home/build3.png", 
			"assets/images/home/build4.png", 
			"assets/images/home/build5.jpg", 
			"assets/images/home/build6.jpg"
			];

var homeImages2 = ["assets/images/home/build1.jpg",
			"assets/images/home/build7.png", 
			"assets/images/home/build8.png", 
			"assets/images/home/build9.jpg", 
			"assets/images/home/build10.jpg"
			];



$( document ).ready(function() {

	console.log("page open");


	//Declaring/Assigning the tab click functions in About Us 
	function philClick () {
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
	};
	function pickettClick () {
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
	};
	function kelmClick () {
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
	};
	function wuClick () {
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
	};
	$("#tab-phil").on('click', function(){
		 philClick ();
	});
	$("#tab-pickett").on('click', function(){
		pickettClick ();
	});
	$("#tab-kelm").on('click', function(){
		kelmClick ();
	});
	$("#tab-wu").on('click', function(){
		wuClick ();
	});


// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count1 = 0;
var count2 = 0;


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#img-holder1").html("<img src=" + homeImages1[count1] + " width='300px'>");
  $("#img-holder2").html("<img src=" + homeImages2[count2] + " width='300px'>");
}

function nextImage() {
  //  TODO: Increment the count by 1.
  count1++;
  count2++;

  $("#img-holder1").addClass("fadeOut");
  $("#img-holder2").addClass("fadeOut");
  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count1 === homeImages1.length) {
    count1 = 0;
  }
  if (count2 === homeImages2.length) {
    count2 = 0;
  }
}

function startImages() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 4000);

}

// This will run the display image function as soon as the page loads.
displayImage();
startImages();



});