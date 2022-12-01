
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
console.log(prevScrollpos);
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos);
  if (currentScrollPos > 0.5) {
    document.getElementById("fixedNavbar").style.display = "flex";
  } else {
    document.getElementById("fixedNavbar").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
} 

$(document).ready(function(){

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  $(".b").click(function(){
    $(this).toggleClass("b");
    $(this).toggleClass("b-selected");

  });
    console.log(window.innerWidth);

  setInterval(function () {
    var playerId = $(".carousel-item.active video").attr("id");
    var player = document.getElementById(playerId);
    console.log(playerId);
    player.play();
  }, 17000);

  // pause: "false"
  $('.carousel').carousel({
      pause: "false"
  });
  
  
    // console.log($(".carousel-item.active video").attr("id"));
    // setInterval(function(){
    //   var playerId = $(".carousel-item.active video").attr("id");
    //   var player = $(playerId);
    //   player.play();
    // },16000);

  // $('#carouselExampleIndicators').carousel().on('slide.bs.carousel', function () {
  //   console.log("slide changed");
  //   $(".banner-video").removeAttr("autoplay");
  //   console.log($(".carousel-item.active video").attr("id"));
  // });
});

// $(window).on("orientationchange", function( event ) {
//   console.log( "This device is in " + window.innerWidth + "px");
//   $(".banner-video").css({
//     width: window.innerWidth+"px",
//     height: window.innerWidth+"px"
//   })
// });

var elem = document.querySelector('.flet-carousel');
var flkty = new Flickity( elem, {
  // options
  cellalign: 'right',
  pageDots: false,
  groupCells: '20%',
  selectedAttraction: 0.03,
  friction: 0.15,
  wrapAround: true
});
var flkty = new Flickity( '.flet-carousel', {
  // freeScroll: true,
});

//   var playPauseBtn = document.getElementById("play-pause");
//   var player = document.getElementById("header-video");
//   player.play();

// player.removeAttribute("controls");
// playPauseBtn.onclick = function() {
//   if (player.paused) {
//     player.play();
//     this.innerHTML = '<i class="play-icon fas fa-pause fa-2x"></i>';
//     $("#play-pause").css("opacity",0.3);
//   } else {
//     player.pause();
//     this.innerHTML = '<i class="play-icon fas fa-play fa-2x"></i>';
//     $("#play-pause").css("opacity",1);
//   }
// };


// var playPauseBtn1 = document.getElementById("play-pause1");
// var player1 = document.getElementById("header-video1");
// player1.removeAttribute("controls");
// playPauseBtn1.onclick = function() {
//   if (player1.paused) {
//     player1.play();
//     this.innerHTML = '<i class="play-icon fas fa-pause fa-2x"></i>';
//     $("#play-pause1").css("opacity",0.3);
//   } else {
//     player1.pause();
//     this.innerHTML = '<i class="play-icon fas fa-play fa-2x"></i>';
//     $("#play-pause1").css("opacity",1);
//   }
// };


// var playPauseBtn2 = document.getElementById("play-pause2");
// var player2 = document.getElementById("header-video2");
// player2.removeAttribute("controls");
// playPauseBtn2.onclick = function() {
//   if (player2.paused) {
//     player2.play();
//     this.innerHTML = '<i class="play-icon fas fa-pause fa-2x"></i>';
//     $("#play-pause2").css("opacity",0.3);
//   } else {
//     player2.pause();
//     this.innerHTML = '<i class="play-icon fas fa-play fa-2x"></i>';
//     $("#play-pause2").css("opacity",1);
//   }
// };

$(".nav-link.px-2rem.custom-nav-text").click(function(){

  var divId = $(this).attr("href");
  $(".other-sections").addClass("pt-lg-20px");
  $(".other-sections").removeClass("pt-lg-100px");
  if(divId != "#home"){

    $(divId).removeClass("pt-lg-20px");
    $(divId).addClass("pt-lg-100px");
  }
  $(".nav-link.px-2rem.custom-nav-text").removeClass("nav-link-active");
  $(this).addClass("nav-link-active");
});

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated');
      }, false)
    })
})();
const d = new Date();
let year = d.getFullYear();
document.getElementById("currYear").innerHTML = year;

