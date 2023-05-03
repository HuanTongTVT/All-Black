$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.manned-flight').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.frameless-parachute').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#frameless-parachute').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.english-channel').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#english-channel').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers （背景） */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls （滑动的动效）*/
function redrawDotNav() {
	var section1Top = 0;
	var section2Top = $('#section-2').offset().top - (($('#section-2').offset().top - $('#section-1').offset().top) / 2);
	var section3Top = $('#section-3').offset().top - (($('#section-3').offset().top - $('#section-2').offset().top) / 2);
	var section4Top = $('#section-4').offset().top - (($('#section-4').offset().top - $('#section-3').offset().top) / 2);
	var section5Top = $('#section-5').offset().top - (($('#section-5').offset().top - $('#section-4').offset().top) / 2);
	var section6Top = $('#section-6').offset().top - (($('#section-6').offset().top - $('#section-5').offset().top) / 2);
	var section7Top = $('#section-7').offset().top - (($('#section-7').offset().top - $('#section-6').offset().top) / 2);
	var section8Top = $('#section-8').offset().top - (($('#section-8').offset().top - $('#section-7').offset().top) / 2);
	var section9Top = $('#section-9').offset().top - (($('#section-9').offset().top - $('#section-8').offset().top) / 2);
	var section10Top = $('#section-10').offset().top - (($('#section-10').offset().top - $('#section-9').offset().top) / 2);
	var section11Top = $('#section-11').offset().top - (($('#section-11').offset().top - $('#section-10').offset().top) / 2);
	var section12Top = $('#section-12').offset().top - (($('#section-12').offset().top - $('#section-11').offset().top) / 2);
	var section13Top = $('#section-13').offset().top - (($(document).height() - $('#section-13').offset().top) / 2);
  
	$('nav#primary a').removeClass('active');
	if ($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top) {
	  $('nav#primary a.section-1').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top) {
	  $('nav#primary a.section-2').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top) {
	  $('nav#primary a.section-3').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top) {
	  $('nav#primary a.section-4').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top) {
	  $('nav#primary a.section-5').addClass('active');
} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top) {
$('nav#primary a.section-7').addClass('active');
} else if ($(document).scrollTop() >= section8Top && $(document).scrollTop() < section9Top) {
$('nav#primary a.section-8').addClass('active');
} else if ($(document).scrollTop() >= section9Top && $(document).scrollTop() < section10Top) {
$('nav#primary a.section-9').addClass('active');
} else if ($(document).scrollTop() >= section10Top && $(document).scrollTop() < section11Top) {
$('nav#primary a.section-10').addClass('active');
} else if ($(document).scrollTop() >= section11Top && $(document).scrollTop() < section12Top) {
$('nav#primary a.section-11').addClass('active');
} else if ($(document).scrollTop() >= section12Top && $(document).scrollTop() < section13Top) {
$('nav#primary a.section-12').addClass('active');
} else if ($(document).scrollTop() >= section13Top) {
$('nav#primary a.section-13').addClass('active');
}
}

var images = document.querySelectorAll('.image-container img');

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.2)';
    this.style.transition = 'transform 0.3s ease';
  });
  
  images[i].addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
    this.style.transition = 'transform 0.3s ease';
  });
}