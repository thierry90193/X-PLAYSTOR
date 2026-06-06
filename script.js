// X-PLAYSTOR

console.log("X-PLAYSTOR ONLINE 🚀");

// BUSCA

const search =
document.querySelector(".search");

if(search){

search.addEventListener(
"keyup",
() => {

const texto =
search.value.toLowerCase();

const jogos =
document.querySelectorAll(
".game-card"
);

jogos.forEach(jogo => {

const nome =
jogo.innerText.toLowerCase();

if(
nome.includes(texto)
){

jogo.style.display =
"block";

}else{

jogo.style.display =
"none";

}

});

});

}

// FAVORITOS

const favoritos =
document.querySelectorAll(
".wishlist-btn"
);

favoritos.forEach(btn => {

btn.addEventListener(
"click",
() => {

btn.innerHTML =
"❤️";

btn.style.background =
"#ff4d7a";

});

});

// COMPRAR

const comprar =
document.querySelectorAll(
".buy-btn,.offer-btn"
);

comprar.forEach(botao => {

botao.addEventListener(
"click",
() => {

alert(
"🎮 Jogo adicionado ao carrinho!"
);

});

});

// BIBLIOTECA

const biblioteca =
document.querySelectorAll(
".library-btn"
);

biblioteca.forEach(botao => {

botao.addEventListener(
"click",
() => {

alert(
"🚀 Iniciando jogo..."
);

});

});

// PERFIL

const perfil =
document.querySelector(
".profile h4"
);

if(perfil){

perfil.addEventListener(
"click",
() => {

alert(
"👤 Perfil X-PLAYER"
);

});

}

console.log(
"PT 1 carregada!"
);
