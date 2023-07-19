
AOS.init({
  offset: 300,
  duration: 600
});
// Top Button function

let ProjectImage = '';

$(document).ready(() =>{

   $('#wth').text(window.innerWidth);

  setTimeout(()=>{
    closeWelcomeAnimation();
  }, 2500);
  
  $('#welcomeButton').click(closeWelcomeAnimation);
  
  $('.closeimage').click(closeImage);
  
  $('.fullimage').click(() =>{
    if($('.fullimage').hasClass("image-zoomout")){
      $('.fullimage').removeClass('image-zoomout');
      $('.fullimage').addClass('image-zoomin');
    }else{
      $('.fullimage').removeClass('image-zoomin');
      $('.fullimage').addClass('image-zoomout');
    }
  });

});

document.addEventListener("keydown", e =>{
  if(e.keyCode == 27){
    if(ProjectImage){
      closeImage();
    }
  }
});

function closeWelcomeAnimation(){
  $('#welcomeSecPopUp').addClass("animate__lightSpeedOutRight");
}

function fullProjectImage(projectimageid){
  $(".project-data").removeAttr("data-aos");
  ProjectImage = projectimageid;
  if($('.project-full-image-layer').hasClass("animate__zoomOut")){
    $('.project-full-image-layer').removeClass('animate__zoomOut');
    $('.project-full-image-layer').addClass('animate__zoomIn');
  }
  $('body').css("overflow", "hidden");
  $('#'+projectimageid).css("display", "block");
  if($('.fullimage').hasClass("image-zoomin")){
    $('.fullimage').removeClass('image-zoomin');
    $('.fullimage').addClass('image-zoomout');
  }
}

function closeImage(){
  $('.project-full-image-layer').removeClass('animate__zoomIn');
      $('.project-full-image-layer').addClass('animate__zoomOut');
      setTimeout(()=>{
        $('.project-full-image-layer').css("display", "none");
        $('body').css("overflow", "auto");
        $(".project-data").attr("data-aos", "zoom-out-down");
      }, 100);
}
