const menuBurger = document.querySelector(".header-burger");
const menu = document.querySelector(".mobile-nav");
const menuCierre = document.querySelector(".mobile-nav-cierre")

menuBurger.addEventListener("click", ()=>{
    menu.style.opacity = 100;
    menu.style.zIndex = 15;
});

menuCierre.addEventListener("click", ()=>{
    menu.style.opacity = 0;
    menu.style.zIndex = -5;
})

// Desplegable para los equipos

const desplegable = document.querySelector(".contenedor-info");
const desplegableInner = document.querySelector(".contenedor-info-inner");
const desplegableCierre = document.querySelector(".contenedor-info-cierre")
const infoHawks = document.querySelector(".equipo-hawks");
const logoHawks = document.querySelector(".hawks");

const infoCeltics = document.querySelector(".equipos-celtics");
const logoCeltics = document.querySelector(".celtics");


const infoHawksCopy = infoHawks.cloneNode(true);
const infoCelticsCopy = infoCeltics.cloneNode(true);


logoHawks.addEventListener("click", (evt)=>{
    evt.preventDefault();
    infoHawksCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoHawksCopy);
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoCeltics.addEventListener("click", (evt)=>{
    evt.preventDefault();
    infoCelticsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoCelticsCopy);
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

desplegableCierre.addEventListener("click", ()=>{
    desplegable.style.opacity = 0;
    desplegable.style.zIndex = -5;
    removeAllChildNodes(desplegableInner)
})


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
