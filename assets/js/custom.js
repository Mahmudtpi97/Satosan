$(document).ready(function(){

  $('.modal-close').click(function(){
    $('.main-modal').fadeOut(500);
   });

  // Slide Shop Area
   $('.cooker-button').click(function(){
   	$('#chef-modal').fadeIn(500);
   });  

   $('#service-button-one').click(function(){
    $('#service-modal-one').fadeIn(500);
   });  

   $('#service-button-two').click(function(){
    $('#service-modal-two').fadeIn(500);
   }); 
   // Extra
  $('.chef-modal').click(function(){
   	$('#chef-modal').fadeOut(500);
   }); 
   // Menu Slider
    $('.header-nav ul li a').click(function(){
       $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
         }, 1000);
         return false;
      });
  })