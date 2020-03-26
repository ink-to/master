
$( document ).ready(function() {
	  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
	direction: 'horizontal',
	speed: 400,
	autoHeight:true,
    loop: false,  
	pagination: {
        el: '.swiper-pagination',
      },

    // Navigation arrows
    navigation: {
      nextEl: '.nextArrow',
      prevEl: '.prevArrow',
    },    
  })
  
  $(".close-list").click(function(){
    $("#modalForm").hide(); 
	$('.modal-backdrop').hide()
  });
  
  $(".form-button .cancel").click(function(){
    $("#modalForm").hide(); 
	$('.modal-backdrop').hide()
  });
  
  $(".close-modal").click(function(){
    $("#modalPrivacy").hide(); 
	$('.modal-backdrop').hide()
  });
  
  $("#modalPrivacy .btn-primary").click(function(){
    $("#modalPrivacy").hide(); 
	$('.modal-backdrop').hide()
  });
  
  $(".form-button .send").click(function(){
    $(".message").addClass("show");
  });  
});



$( document ).ready(function() {
		
   
  $(".close-list").click(function(){
    $("#modalForm").hide(); 
	$('.modal-backdrop').hide();
	$('#swiper').show();	
	$('#main-container').css({ height: 'auto' });
  });
  
  $(".form-button .cancel").click(function(){
    $("#modalForm").hide(); 
	$('.modal-backdrop').hide();
	$('#swiper').show();
	$('#main-container').css({ height: 'auto' });
  });
  
  $(".close-modal").click(function(){
    $("#modalPrivacy").hide(); 
	$('.modal-backdrop').hide();
	$('#swiper').show();
	$('#main-container').css({ height: 'auto' });
  });
  
  $("#modalPrivacy .btn-primary").click(function(){
    $("#modalPrivacy").hide(); 
	$('.modal-backdrop').hide();
	$('#swiper').show();
	$('#main-container').css({ height: 'auto' });
  });
  
  $(".form-button .send").click(function(){
    $(".message").addClass("show");
  });
});

$(window).on('load', function() {
	$(document).ready(function() {

		var playing = false;

		bgSound = document.getElementById("bgSound");
	   
	   // bgSound.volume = 0.1;

		$('a#playBtn').click(function() {
			$(this).toggleClass("stopBtn");

			if (playing == false) {
				//document.getElementById('bgSound').play();
				playing = true; 

			} else {
				//document.getElementById('bgSound').pause();
				playing = false; 
			}


		});
		

		$('.demande').click(function() {
			$('#modalForm').show();
			$(window).scrollTop(0);	
			$('#swiper').hide();
			var slickHeight = $('#modalForm'); /* cache the selector */
			$('#main-container').css({ height: slickHeight.height() });
		});
	});
});

$(".more").click(function(){
  if (navigator.share) {
  navigator.share({
    title: document.title,
    text: "Check this",
    url: window.location.href
  }).then(() => console.log('Successful share'))
  .catch(error => console.log('Error sharing:', error));
}
});
jQuery(document).ready(function($) {
    function swipeLeft(){
	  $('.swiper-wrapper').animate({ marginLeft: '-50%' }, 400);
	}
	setTimeout(swipeLeft, 5000);
	function swipeRight(){
	  $('.swiper-wrapper').animate({ marginLeft: '0%' }, 400);
	}
	setTimeout(swipeRight, 5400);
});
 