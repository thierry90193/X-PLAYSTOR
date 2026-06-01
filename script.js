function showPage(pageId){

const pages =
document.querySelectorAll(".page");

pages.forEach(page=>{
page.style.display="none";
});

const selected =
document.getElementById(pageId);

if(selected){
selected.style.display="block";
}

}

document.addEventListener(
"DOMContentLoaded",
()=>{

const home =
document.getElementById("home");

if(home){
home.style.display="block";
}

}
);const searchInput =
document.querySelector(".search");

if(searchInput){

searchInput.addEventListener(
"keyup",
function(){

let value =
this.value.toLowerCase();

let games =
document.querySelectorAll(
".game-card"
);

games.forEach(game=>{

let title =
game.querySelector("h3")
.innerText
.toLowerCase();

if(title.includes(value)){
game.style.display="block";
}else{
game.style.display="none";
}

});

}
);

}const favoriteButtons =
document.querySelectorAll(
".favorite-btn"
);

favoriteButtons.forEach(btn=>{

btn.addEventListener(
"click",
function(){

this.classList.toggle(
"active-favorite"
);

if(
this.innerHTML === "🤍"
){
this.innerHTML = "❤️";
}else{
this.innerHTML = "🤍";
}

}
);

});let cartCount = 0;

const cartNumber =
document.getElementById(
"cart-count"
);

const buyButtons =
document.querySelectorAll(
".buy-btn"
);

buyButtons.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

cartCount++;

if(cartNumber){
cartNumber.innerText =
cartCount;
}

alert(
"Jogo adicionado ao carrinho!"
);

}
);

});let xcoins = 1250;

function addCoins(valor){

xcoins += valor;

document.getElementById(
"xcoins"
).innerText =
xcoins.toLocaleString(
"pt-BR"
);

}

function removeCoins(valor){

xcoins -= valor;

document.getElementById(
"xcoins"
).innerText =
xcoins.toLocaleString(
"pt-BR"
);

}window.addEventListener(
"load",
()=>{

setTimeout(()=>{

console.log(
"Equipe X-PLAYSTOR online."
);

},2000);

});function startOfferTimer(){

let time = 86400;

setInterval(()=>{

let h =
Math.floor(time/3600);

let m =
Math.floor(
(time%3600)/60
);

let s =
time%60;

const timer =
document.getElementById(
"offer-timer"
);

if(timer){

timer.innerHTML =
`${h}h ${m}m ${s}s`;

}

time--;

},1000);

}

startOfferTimer();
