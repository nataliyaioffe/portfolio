AOS.init();

const app = {};

// Doc Ready
$(function() {
  app.init();
});

app.init = function() {
  // window.onscroll();
  app.menu();
  

  $(".fa-angle-double-down").on("click", function(e) {
    if (app.scrollCount < 5) {
      app.scrollCount++
    } else {
      app.scrollCount = 1;
    }
    console.log(app.scrollCount);
    $("html, body").animate({ scrollTop: $(`.scroll-${app.scrollCount}`).offset().top}, 1000);
  });

}

app.scrollCount = 0;

app.menu = function() {
  $(".hamburger").on("click", function() {
    $(".list").toggleClass("hidden");
    $(".hamburger").toggleClass("hide");
    $(".exit").toggleClass("hidden");
  });
  $(".exit").on("click", function() {
    $(".list").toggleClass("hidden");
    $(".hamburger").toggleClass("hide");
    $(".exit").toggleClass("hidden");
  });
};
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
