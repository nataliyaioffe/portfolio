AOS.init();

const app = {};

// Doc Ready
$(function() {
  app.init();


  
});
// end document ready

app.init = function() {
  app.menu();
  $(".down").smoothScroll({ speed: 800 });
  $(".up").smoothScroll({ speed: 800 });




}
// end init


app.menu = function() {
  $(".hamburger").on("click", function() {
    app.dropdown()
  });

  $(".exit").on("click", function() {
    app.dropdown()
  });
};

app.dropdown = function() {
  $(".list").toggleClass("hidden");
  $(".hamburger").toggleClass("hide");
  $(".exit").toggleClass("hidden");
}


$(document).on('click', '.navbar-collapse.in', function (e) {
  if ($(e.target).is('a')) {
    $(this).collapse('hide');
  }
});

// window.onscroll = function () {
//   console.log("onscroll");
//     fixNav()
// };

// app.topbar = document.getElementById("top-bar");
// app.sticky = app.topbar.offsetTop;

// function fixNav() {
//   console.log("fixnav");

//     if (window.pageYOffset >= app.sticky) {
//         app.topbar.classList.add("fix-nav")
//     } else {
//         app.topbar.classList.remove("fix-nav");
//     }
// }
