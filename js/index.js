$(document).ready(function () {
  $("#slideshow > figure:gt(0)").hide();

  setInterval(function () {
    $("#slideshow > figure:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
  }, 5000);

  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // $('.carousel').carousel({
  //     interval: 2000
  //   })

  // navbar template load
  // $('#navbars').load('navbar.html');

  // footer template load
  $("#footer").load("footer.html");

  $(".arrow-down").click(function () {
    $(".additional-logos").slideToggle(300);
  });

  // $('.arrow-down-02').click(function(){
  //     $('.additional-logos-02').slideToggle(300);
  //       });

  //Available Jobs Drop Down-01
  $("#job-01").click(function () {
    $(".job-01").slideToggle(300);
    $("#chevron-up-01").toggle();
    $("#chevron-down-01").toggle();
  });
  //Available Jobs Drop Down-02
  $("#job-02").click(function () {
    $(".job-02").slideToggle(300);
    $("#chevron-up-02").toggle();
    $("#chevron-down-02").toggle();
  });
  //Available Jobs Drop Down-03
  $("#job-03").click(function () {
    $(".job-03").slideToggle(300);
    $("#chevron-up-03").toggle();
    $("#chevron-down-03").toggle();
  });

  // const navSlide = () => {
  //   const burger = document.querySelector('.burger');
  //   const nav = document.querySelector('.nav-links');
  //   const navLinks = document.querySelectorAll('.nav-links li');

  //     //Toggle Nav
  //   burger.addEventListener('click',() => {
  //       nav.classList.toggle('nav-active');

  //     //Animate Links
  //   navLinks.forEach((link, index) => {

  //     if(link.style.animation){
  //         link.style.animation = '';
  //     }else{
  //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
  //         }
  //     });
  //     //Burger Animation
  //     burger.classList.toggle('toggle');
  // });

  // }
  // navSlide();

  // LEAFLET MAP //
  // initialize the map on the "map" div with a given center and zoom
  var mymap = L.map("mapid", {
    center: [39.7478278, -104.9882736],
    zoom: 13,
  });

  var denver = L.marker([39.7478278, -104.9882736]).addTo(mymap);
  denver.bindPopup(
    "<b>Primary Contact</b> <br> <b>Denver</b> <br> <a href='https://www.google.com/maps/place/1999+Broadway,+1999+N+Broadway,+Denver,+CO+80202/@39.7478012,-104.9899059,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78d7860b24d9:0x854a5f0d10e5c87f!8m2!3d39.7477971!4d-104.9877172?hl=en-US'>View on Google Maps</a>"
  );

  // var ogg = L.marker([20.8967924, -156.4329379]).addTo(mymap);
  // ogg.bindPopup("<b>ogg</b>");

  // var marker = L.marker([51.5, -0.09]).addTo(mymap);
  // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoianZveWUiLCJhIjoiY2tlbjV0bjgxMGZ3cDJybnFudmhoNnhvOCJ9.0dqpp25O6abTVguEgCSd6w",
    }
  ).addTo(mymap);
});
