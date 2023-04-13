const menuBurger = document.querySelector(".header-burger");
const menu = document.querySelector(".mobile-nav");
const menuCierre = document.querySelector(".mobile-nav-cierre")

menuBurger.addEventListener("click", ()=>{
    menu.style.opacity = 100;
    menu.style.zIndex = 15;
});

menuCierre.addEventListener("click", ()=>{
    menu.style.opacity = 0;
    menu.style.zIndex = 0;
})