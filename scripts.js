AOS.init();

const app = {};

// Doc Ready
$(function() {
    console.log("ready");
    app.init();

});

app.init = function () {
    console.log("init!");
    // listeners
    // app.startModal();
};


// app.menu = function () {
//     $(".hamburgerNav").on("click", function () {
//         $(".pageNav").toggleClass("menuHide");
//         $(".hamburger").toggleClass("hidden");
//         $(".close").toggleClass("hidden");
//     })
// }