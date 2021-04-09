// button hamburger mobile
let btnMenu = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
btnMenu.addEventListener("click", function () {
    btnMenu.classList.toggle("active");
    nav.classList.toggle("active");
});

//totop
//let backtotop = querySelector(".totop");
// add background header when scroll
let header = document.querySelector("header");
let menus = document.querySelector(".menus");

document.addEventListener("scroll", function () {
    let scrollY = window.pageYOffset;
    let headerHeight = header.clientHeight;
    if (scrollY > headerHeight) {
        header.classList.add("hide");
        menus.classList.add("fixed");
    } else {
        header.classList.remove("hide");
        menus.classList.remove("fixed");
    }
});
