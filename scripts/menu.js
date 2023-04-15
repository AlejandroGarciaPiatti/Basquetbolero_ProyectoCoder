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

const infoBulls = document.querySelector(".equipos-bulls");
const logoBulls = document.querySelector(".bulls");

const infoCavs = document.querySelector(".equipos-cavs");
const logoCavs = document.querySelector(".cavs");

const infoPistons = document.querySelector(".equipos-pistons");
const logoPistons = document.querySelector(".pistons");

const infoPacers = document.querySelector(".equipos-pacers");
const logoPacers = document.querySelector(".pacers");

const infoHeat = document.querySelector(".equipos-heat");
const logoHeat = document.querySelector(".heat");

const infoBucks = document.querySelector(".equipos-bucks");
const logoBucks = document.querySelector(".bucks");

const infoHornets = document.querySelector(".equipos-hornets");
const logoHornets = document.querySelector(".hornets");

const infoKnicks = document.querySelector(".equipos-knicks");
const logoKnicks = document.querySelector(".knicks");

const infoNets = document.querySelector(".equipos-nets");
const logoNets = document.querySelector(".nets");

const infoRaps = document.querySelector(".equipos-raps");
const logoRaps = document.querySelector(".raptors");

const infoSixers = document.querySelector(".equipos-sixers");
const logoSixers = document.querySelector(".sixers");

const infoWizards = document.querySelector(".equipos-wizards");
const logoWizards = document.querySelector(".wizards");

const infoMagic = document.querySelector(".equipos-magic");
const logoMagic = document.querySelector(".magic");




// Desplegables Este

logoHawks.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoHawksCopy = infoHawks.cloneNode(true);
    infoHawksCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoHawksCopy);
    desplegableInner.style.backgroundColor = "#ee2120";
    desplegableInner.style.backgroundImage = "url('../img/hawks.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "10px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoCeltics.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoCelticsCopy = infoCeltics.cloneNode(true);
    infoCelticsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoCelticsCopy);
    desplegableInner.style.backgroundColor = "#11ef20";
    desplegableInner.style.backgroundImage = "url('../img/celtics.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "80px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoBulls.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoBullsCopy = infoBulls.cloneNode(true);
    infoBullsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoBullsCopy);
    desplegableInner.style.backgroundColor = "#ee2120";
    desplegableInner.style.backgroundImage = "url('../img/bulls.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-400px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoCavs.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoCavsCopy = infoCavs.cloneNode(true);
    infoCavsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoCavsCopy);
    desplegableInner.style.backgroundColor = "#751f1f";
    desplegableInner.style.backgroundImage = "url('../img/cavs.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "60px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoPistons.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoPistonsCopy = infoPistons.cloneNode(true);
    infoPistonsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoPistonsCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/pistons.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "60px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoPacers.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoPacersCopy = infoPacers.cloneNode(true);
    infoPacersCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoPacersCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/pacers.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "60px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoHeat.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoHeatCopy = infoHeat.cloneNode(true);
    infoHeatCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoHeatCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/heat.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "0px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoBucks.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoBucksCopy = infoBucks.cloneNode(true);
    infoBucksCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoBucksCopy);
    desplegableInner.style.backgroundColor = "#116611";
    desplegableInner.style.backgroundImage = "url('../img/bucks.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-400px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoHornets.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoHornetsCopy = infoHornets.cloneNode(true);
    infoHornetsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoHornetsCopy);
    desplegableInner.style.backgroundColor = "#2475A8";
    desplegableInner.style.backgroundImage = "url('../img/hornets.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-150px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoKnicks.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoKnicksCopy = infoKnicks.cloneNode(true);
    infoKnicksCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoKnicksCopy);
    desplegableInner.style.backgroundColor = "#2475A8";
    desplegableInner.style.backgroundImage = "url('../img/knicks.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-150px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoNets.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoNetsCopy = infoNets.cloneNode(true);
    infoNetsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoNetsCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/nets.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "120px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})

logoRaps.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoRapsCopy = infoRaps.cloneNode(true);
    infoRapsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoRapsCopy);
    desplegableInner.style.backgroundColor = "#000";
    desplegableInner.style.backgroundImage = "url('../img/raptors.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "50px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoSixers.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoSixersCopy = infoSixers.cloneNode(true);
    infoSixersCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoSixersCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/sixers.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-150px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoWizards.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoWizardsCopy = infoWizards.cloneNode(true);
    infoWizardsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoWizardsCopy);
    desplegableInner.style.backgroundColor = "#003";
    desplegableInner.style.backgroundImage = "url('../img/wizards.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-150px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoMagic.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoMagicCopy = infoMagic.cloneNode(true);
    infoMagicCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoMagicCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/magic.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "90px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  



// Desplegables Oeste

const infoBlazers = document.querySelector(".equipos-blazers");
const logoBlazers = document.querySelector(".blazers");

const infoClippers = document.querySelector(".equipos-clippers");
const logoClippers = document.querySelector(".clippers");

const infoKings = document.querySelector(".equipos-kings");
const logoKings = document.querySelector(".kings");

const infoGrizzlies = document.querySelector(".equipos-grizzlies");
const logoGrizzlies = document.querySelector(".grizzlies");

const infoJazz = document.querySelector(".equipos-jazz");
const logoJazz = document.querySelector(".jazz");

const infoLakers = document.querySelector(".equipos-lakers");
const logoLakers = document.querySelector(".lakers");

const infoMavs = document.querySelector(".equipos-mavs");
const logoMavs = document.querySelector(".mavs");

const infoNuggets = document.querySelector(".equipos-nuggets");
const logoNuggets = document.querySelector(".nuggets");

const infoPelicans = document.querySelector(".equipos-pelicans");
const logoPelicans = document.querySelector(".pelicans");

const infoRockets = document.querySelector(".equipos-rockets");
const logoRockets = document.querySelector(".rockets");

const infoSpurs = document.querySelector(".equipos-spurs");
const logoSpurs = document.querySelector(".spurs");

const infoSuns = document.querySelector(".equipos-suns");
const logoSuns = document.querySelector(".suns");

const infoThunder = document.querySelector(".equipos-thunder");
const logoThunder = document.querySelector(".thunder");

const infoWarriors = document.querySelector(".equipos-warriors");
const logoWarriors = document.querySelector(".warriors");

const infoWolves = document.querySelector(".equipos-wolves");
const logoWolves = document.querySelector(".wolves");



logoBlazers.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoBlazersCopy = infoBlazers.cloneNode(true);
    infoBlazersCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoBlazersCopy);
    desplegableInner.style.backgroundColor = "#000";
    desplegableInner.style.backgroundImage = "url('../img/blazers.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-290px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoClippers.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoClippersCopy = infoClippers.cloneNode(true);
    infoClippersCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoClippersCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/clippers.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "0px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoKings.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoKingsCopy = infoKings.cloneNode(true);
    infoKingsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoKingsCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/kings.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-100px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoGrizzlies.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoGrizzliesCopy = infoGrizzlies.cloneNode(true);
    infoGrizzliesCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoGrizzliesCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/grizzlies.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-100px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoJazz.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoJazzCopy = infoJazz.cloneNode(true);
    infoJazzCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoJazzCopy);
    desplegableInner.style.backgroundColor = "#440044";
    desplegableInner.style.backgroundImage = "url('../img/jazz.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "90px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoLakers.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoLakersCopy = infoLakers.cloneNode(true);
    infoLakersCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoLakersCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/lakers.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "100px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoMavs.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoMavsCopy = infoMavs.cloneNode(true);
    infoMavsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoMavsCopy);
    desplegableInner.style.backgroundColor = "#2222bb";
    desplegableInner.style.backgroundImage = "url('../img/mavs.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "90px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoNuggets.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoNuggetsCopy = infoNuggets.cloneNode(true);
    infoNuggetsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoNuggetsCopy);
    desplegableInner.style.backgroundColor = "#222288";
    desplegableInner.style.backgroundImage = "url('../img/nuggets.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-130px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoPelicans.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoPelicansCopy = infoPelicans.cloneNode(true);
    infoPelicansCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoPelicansCopy);
    desplegableInner.style.backgroundColor = "#aa1100";
    desplegableInner.style.backgroundImage = "url('../img/pelicans.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "90px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoRockets.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoRocketsCopy = infoRockets.cloneNode(true);
    infoRocketsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoRocketsCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/rockets.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "0px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoSpurs.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoSpursCopy = infoSpurs.cloneNode(true);
    infoSpursCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoSpursCopy);
    desplegableInner.style.backgroundColor = "#000";
    desplegableInner.style.backgroundImage = "url('../img/spurs.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "90px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoSuns.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoSunsCopy = infoSuns.cloneNode(true);
    infoSunsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoSunsCopy);
    desplegableInner.style.backgroundColor = "#560046";
    desplegableInner.style.backgroundImage = "url('../img/suns.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "90px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoThunder.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoThunderCopy = infoThunder.cloneNode(true);
    infoThunderCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoThunderCopy);
    desplegableInner.style.backgroundColor = "#dd7711";
    desplegableInner.style.backgroundImage = "url('../img/thunder.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-450px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoWarriors.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoWarriorsCopy = infoWarriors.cloneNode(true);
    infoWarriorsCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoWarriorsCopy);
    desplegableInner.style.backgroundColor = "#fff";
    desplegableInner.style.backgroundImage = "url('../img/warriors.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "-750px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  

logoWolves.addEventListener("click", (evt)=>{
    evt.preventDefault();
    const infoWolvesCopy = infoWolves.cloneNode(true);
    infoWolvesCopy.classList.toggle("contenedor-info-estilo") 
    desplegableInner.appendChild(infoWolvesCopy);
    desplegableInner.style.backgroundColor = "#112156";
    desplegableInner.style.backgroundImage = "url('../img/wolves.png')";
    desplegableInner.style.backgroundSize = "1000px";
    desplegableInner.style.backgroundRepeat = "no-repeat";
    desplegableInner.style.backgroundPosition = "center";
    desplegableInner.style.backgroundPositionY = "90px";
    desplegable.style.opacity = 100;
    desplegable.style.zIndex = 20;
})  



desplegableCierre.addEventListener("click", ()=>{
    removeAllChildNodes(desplegableInner);
    desplegableInner.style.backgroundImage = "none";
    desplegableInner.style.backgroundColor = "none";
    desplegable.style.opacity = 0;
    desplegable.style.zIndex = -5;
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
