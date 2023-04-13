const menuBurger = document.querySelector(".header-burger");
const menu = document.querySelector(".mobile-nav");
const menuCierre = document.querySelector(".mobile-nav-cierre")

menuBurger.addEventListener("click", ()=>{
    menu.style.left = 0;
});

menuCierre.addEventListener("click", ()=>{
    menu.style.left = "-600px"
})