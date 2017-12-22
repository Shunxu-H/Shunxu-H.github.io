
/*================== loader ===========================*/
$(window).on("load", function() {
//$(document).ready(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");
	clear_all();
});

function clear_all()
{
	$(".bg ").css({
		"-webkit-filter": "blur(0px)",
	    "-moz-filter" : "blur(0px)" ,
	    "-o-filter" : "blur(0px)" ,
	    "-ms-filter" : "blur(0px)" ,
	    "filter" : "blur(0px)" ,
	    "opacity" : "1"
	});
};

function blur_all()
{
	$(".bg ").css({
		"-webkit-filter": "blur(20px)",
	    "-moz-filter" : "blur(20px)" ,
	    "-o-filter" : "blur(20px)" ,
	    "-ms-filter" : "blur(20px)" ,
	    "filter" : "blur(20px)" ,
	    "opacity" : "0.8"
	});
}

$(function()
{
	blur_all();
});



// auto hide the nav bar
( function(){

	var documentElem = $(document),
		nav = $('nav'),
		lastScrollTop = 0;
	documentElem.on('scroll', function() {
		var currentScrollTop = $(this).scrollTop();

		// scroll down
		if( currentScrollTop > lastScrollTop )  $("nav").addClass('hidden');
		else $("nav").removeClass( 'hidden' );
		lastScrollTop = currentScrollTop;
	});
}) ();



 // change background size on window resize
 $(window).resize(function() {
 	$(".bg > .ibg-bg").css({
    	width: $(window).outerWidth(),
    	height: $(window).outerHeight()
 	})
})

 $(window).resize(function() {
 	$(".flow > .ibg-bg").css({
    	width: $(window).outerWidth(),
    	height: $(window).outerHeight()
 	})
})



// get cursor position
$( document ).on( "mousemove", function( event ) {
  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );

});

// look back at here please
$( ".project_window_right" ).on( "mouseenter", function( event ) {
  $( ".project_window_right" ).css( { "color" : "black "} );

});

/*
// see what is clicked
$(document).delegate('*', 'click', function (e) {
    console.log(e.target);
});

// see what is on hovered
$(document).delegate('*', 'mouseenter', function (e) {
    console.log(e.target);
});

*/




function click_home()
{

	setTimeout( click_clear, 500 );
}


function click_projects()
{
	swap_tag_routine();
	$(".projects").css( "display" , "block" );
	setTimeout( function() {
	$(".projects").css({  "opacity": "1" });
	}, 500 )
}

function click_resume()
{
	//click_home();
	swap_tag_routine();
	$(".resume").css( "display" , "block" );
	setTimeout( function() {
		$(".resume").css({  "opacity": "1" });
	}, 500 )

}

function blur(  )
{
	for ( var i = 0; i < arguments.length; i++ )
	{
		$( arguments[i] ).css({
			"-webkit-filter": "blur(15px)",
		    "-moz-filter" : "blur(15px)" ,
		    "-o-filter" : "blur(15px)" ,
		    "-ms-filter" : "blur(15px)" ,
		    "filter" : "blur(15px)" ,
		    "opacity" : "0.8"
		});
	}

}

function click_connect()
{
	swap_tag_routine();
	$(".connect").css( "display" , "block" );
	setTimeout( function() {
		$(".connect").css({  "opacity": "1" });
	}, 500 )
	//$(".icon").css("width", "14%");
}

function click_blur()
{

	$(".ibg-bg, .intro , .intro_bg").css({
		"-webkit-filter": "blur(15px)",
	    "-moz-filter" : "blur(15px)" ,
	    "-o-filter" : "blur(15px)" ,
	    "-ms-filter" : "blur(15px)" ,
	    "filter" : "blur(15px)" ,
	    "opacity" : "0.8"
	});
};

function click_clear()
{

	$(".ibg-bg, .intro , intro_bg").css({
		"-webkit-filter": "blur(0px)",
	    "-moz-filter" : "blur(0px)" ,
	    "-o-filter" : "blur(0px)" ,
	    "-ms-filter" : "blur(0px)" ,
	    "filter" : "blur(0px)" ,
	    "opacity" : "1"
	});

};

function swap_tag_routine()
{
	click_blur();
}




// to type
$(window).on("load", function() {
      $(function(){
          $(".name").typed({
              <!-- strings: ["    ", "Hi, I am <strong> Shunxu</strong>. ^300 <br>And I ^500 make things."], -->
              strings: ["    ", "Hi, I am <strong> Shunxu^750</strong>",
                        "Hi, I am a ^400 web designer,",
                        "Hi, I am a ^500 programmer, ^750 and",
                        "Hi, I am <strong>Shunxu</strong>.",
                        "Hi, I am <strong> Shunxu</strong>. ^300 <br>And I ^500 make things." ,
                        "Hi, I am <strong> Shunxu</strong>. ^300 <br>And I ^500 make this website, games, and apps.",
                        "^500Why are you here today? <br> <span id='project' onmouseover=\"this.style.cursor='pointer'\" onmouseout=\"this.style.cursor='default'\" onclick='click_project()';> ^250 See my project? </span> or <span id='hire_me'> ^250 Hire me? </span>  "],
              startDelay: 50,
              typeSpeed: 0
          });
      });

});

/*================= TO ENLARGE SOCIAL MEDIA ICONS WHEN HOVER =========================*/

function icon_mouseover() {

}

function icon_mouseover() {

}

/*


  height: 900px;

function setContentTop()
{
	vph = $(window).height();
	$("content").css("top": vph + "px");
}
*/
