function clickListeners() {

	//go to: http://api.jquery.com to read about each of the methods below and then set the apropriate button to apply the method to the content below it.

	//hide
	$("#b1").click(function(){
		$("#p1").hide();
	});
			
	//show
	$("#b2").click(function(){
		$("#p1").show();
	});
			
	//toggle
	$("#b3").click(function(){
		$("#p1").toggle();
	});
		
	//css
	$("#b4").click(function(){
		$("#p2").css( "background-color", "rgb(204, 204, 204)" );
	});
	
		
	//css (multiple property changes)
	$("#b5").click(function(){
		$("#p2").css( {
									"background-color": "rgb(0, 0, 255)",
									"color": "rgb(255, 255, 255)",
									"padding": "5px"
									} );
	});

	//html
	$("#b6").click(function(){
		$("#p3").html("change html text to this!");
	});
	
		
	//prepend
	$("#b7").click(function(){
		$("#p3").prepend("Before ");
	});
		 
	//append
	$("#b8").click(function(){
		$("#p3").append(" After");
	});

		 
	//before
	$("#b9").click(function(){
		$("#p4").before("<h3>Before E</h3>");
	});
		 
	//after
	$("#b10").click(function(){
		$("#p4").after("<h3>After E</h3>");
	});

		 
	//wrap
	$("#b11").click(function(){
		$("#p5").wrap("<div class='pinky'></div>");
	});

	//addClass
	$("#b12").click(function(){
		$("#p5").addClass("texty");
	});
		 
	//clone
	$("#b13").click(function(){
		$("#b13 + ul li").clone().prependTo( "#b13 + ul li" );
	});
		 
	//fadeOut
	$("#b14").click(function(){
		$("#p6").fadeOut();
	});
		 
	//fadeIn
	$("#b15").click(function(){
		$("#p6").fadeIn();
	});
		  
	//fadeToggle
	$("#b16").click(function(){
		$("#p6").fadeToggle();
	});
		  
	//slideUp
	$("#b17").click(function(){
		$("div .box-content").slideUp();
	});
		 
	//slideDown
	$("#b18").click(function(){
		$("div .box-content").slideDown();
	});

	//slideToggle
	$("div .box-header").click(function(){
		$("div .box-content").slideToggle();
	});
		  
	//animate
	$("#b19").click(function(){
		$("div .box-animate").animate({
    	opacity: "toggle",
    	left: "toggle",
    	width: "toggle",
    	height: "toggle",
    	"background-color": "toggle"
 		}, 5000, function() {
    	$("div .box-animate").css({
																"background-color": "rgb(0, 0, 255)",
																"color": "rgb(255, 255, 255)",
																"padding": "5px"
																} );
    	$("div .box-animate").html("all set boss");
  	});
	});
		 
}