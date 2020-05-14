$(document).ready(function(){

    $("#slideshow > figure:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > figure:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  5000)


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


    // $('.carousel').carousel({
    //     interval: 2000
    //   })

// navbar template load
// $('#navbars').load('navbar.html');

// footer template load
$('#footer').load('footer.html');

$('.arrow-down').click(function(){
    $('.additional-logos').slideToggle(300);
      });

// $('.arrow-down-02').click(function(){
//     $('.additional-logos-02').slideToggle(300);
//       });


//Available Jobs Drop Down-01
$('#job-01').click(function(){
    $('.job-01').slideToggle(300);
        $('#chevron-up-01').toggle();
            $('#chevron-down-01').toggle();
});
//Available Jobs Drop Down-02
$('#job-02').click(function(){
    $('.job-02').slideToggle(300);
        $('#chevron-up-02').toggle();
            $('#chevron-down-02').toggle();
});
//Available Jobs Drop Down-03
$('#job-03').click(function(){
    $('.job-03').slideToggle(300);
        $('#chevron-up-03').toggle();
            $('#chevron-down-03').toggle();
});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav
  burger.addEventListener('click',() => {
      nav.classList.toggle('nav-active');

    //Animate Links
  navLinks.forEach((link, index) => {

    if(link.style.animation){
        link.style.animation = '';
    }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s` 
        }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
});

}
navSlide();

});

