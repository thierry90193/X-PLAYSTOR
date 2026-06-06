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
// ======================
// NOTIFICAÇÕES
// ======================

function notificar(texto){

const aviso =
document.createElement("div");

aviso.innerText =
texto;

aviso.style.position =
"fixed";

aviso.style.top =
"20px";

aviso.style.right =
"20px";

aviso.style.padding =
"15px";

aviso.style.borderRadius =
"12px";

aviso.style.zIndex =
"9999";

aviso.style.background =
"#7b2cff";

aviso.style.color =
"white";

document.body.appendChild(
aviso
);

setTimeout(() => {

aviso.remove();

},3000);

}

// ======================
// X-COINS
// ======================

let moedas = 1250;

const coinBox =
document.querySelector(
".coin-value"
);

if(coinBox){

coinBox.innerText =
moedas.toLocaleString(
"pt-BR"
);

}

// ======================
// GANHAR MOEDAS
// ======================

setInterval(() => {

moedas += 25;

if(coinBox){

coinBox.innerText =
moedas.toLocaleString(
"pt-BR"
);

}

},30000);

// ======================
// CARRINHO
// ======================

let carrinho = 0;

const cartBtn =
document.querySelector(
".cart-count"
);

document
.querySelectorAll(
".buy-btn,.offer-btn"
)
.forEach(btn => {

btn.addEventListener(
"click",
() => {

carrinho++;

if(cartBtn){

cartBtn.innerText =
carrinho;

}

notificar(
"🛒 Item adicionado!"
);

});

});

// ======================
// BOAS-VINDAS
// ======================

setTimeout(() => {

notificar(
"🎮 Bem-vindo à X-PLAYSTOR!"
);

},1500);

console.log(
"PT 2 carregada!"
);// ======================
// XP E NÍVEL
// ======================

let xp = 0;
let nivel = 1;

// ======================
// CAIXA DE NÍVEL
// ======================

const levelBox =
document.createElement("div");

levelBox.className =
"xplay-level";

levelBox.style.position =
"fixed";

levelBox.style.bottom =
"20px";

levelBox.style.right =
"20px";

levelBox.style.padding =
"15px";

levelBox.style.borderRadius =
"12px";

levelBox.style.background =
"#1e1e2f";

levelBox.style.color =
"white";

levelBox.style.zIndex =
"9999";

levelBox.innerHTML =
"⭐ Nível 1<br>XP: 0";

document.body.appendChild(
levelBox
);

// ======================
// GANHAR XP
// ======================

function ganharXP(valor){

xp += valor;

if(xp >= nivel * 100){

xp = 0;

nivel++;

notificar(
"🎉 Você subiu para o nível " +
nivel
);

}

levelBox.innerHTML =
"⭐ Nível " +
nivel +
"<br>XP: " +
xp;

}

// ======================
// COMPRAR = XP
// ======================

document
.querySelectorAll(
".buy-btn,.offer-btn"
)
.forEach(btn => {

btn.addEventListener(
"click",
() => {

ganharXP(25);

});

});

// ======================
// FAVORITOS = XP
// ======================

document
.querySelectorAll(
".wishlist-btn"
)
.forEach(btn => {

btn.addEventListener(
"click",
() => {

ganharXP(10);

});

});

// ======================
// CONQUISTAS
// ======================

const conquistas = [];

function desbloquear(nome){

if(
!conquistas.includes(nome)
){

conquistas.push(nome);

notificar(
"🏆 Conquista: " +
nome
);

}

}

// ======================
// PRIMEIRA COMPRA
// ======================

let compras = 0;

document
.querySelectorAll(
".buy-btn,.offer-btn"
)
.forEach(btn => {

btn.addEventListener(
"click",
() => {

compras++;

if(compras === 1){

desbloquear(
"Primeira Compra"
);

}

if(compras === 5){

desbloquear(
"Cliente Frequente"
);

}

});

});

// ======================
// COLECIONADOR
// ======================

let favoritosTotal = 0;

document
.querySelectorAll(
".wishlist-btn"
)
.forEach(btn => {

btn.addEventListener(
"click",
() => {

favoritosTotal++;

if(
favoritosTotal === 3
){

desbloquear(
"Colecionador"
);

}

});

});

console.log(
"PT 3 carregada!"
);// ======================
// PERFIL DO JOGADOR
// ======================

const nomeJogador =
"X-PLAYER";

console.log(
"Jogador:",
nomeJogador
);

// ======================
// TEMPO ONLINE
// ======================

let minutosOnline = 0;

setInterval(() => {

minutosOnline++;

if(
minutosOnline % 5 === 0
){

notificar(
"⏰ Você está online há " +
minutosOnline +
" minutos"
);

}

},60000);

// ======================
// AMIGOS ONLINE
// ======================

const amigos = [

"João",
"Maria",
"Lucas",
"Ana",
"NightWolf"

];

setInterval(() => {

const amigo =
amigos[
Math.floor(
Math.random() *
amigos.length
)
];

notificar(
"👥 " +
amigo +
" ficou online!"
);

},45000);

// ======================
// STATUS DE JOGO
// ======================

const statusJogos = [

"🎮 Jogando Cyber Runner",
"🚀 Explorando Starfield",
"🏇 Jogando Red Dead",
"🏰 Em Hogwarts Legacy",
"⚔️ Em batalha"

];

setInterval(() => {

const status =
statusJogos[
Math.floor(
Math.random() *
statusJogos.length
)
];

console.log(
status
);

},20000);

// ======================
// ESTATÍSTICAS
// ======================

let jogosAbertos = 0;

document
.querySelectorAll(
".library-btn"
)
.forEach(btn => {

btn.addEventListener(
"click",
() => {

jogosAbertos++;

if(
jogosAbertos === 1
){

desbloquear(
"Primeiro Jogo Aberto"
);

}

if(
jogosAbertos === 10
){

desbloquear(
"Viciado em Games"
);

}

});

});

// ======================
// LOGIN DIÁRIO
// ======================

setTimeout(() => {

desbloquear(
"Login Diário"
);

},3000);

console.log(
"PT 4 carregada!"
);// ======================
// CUPONS
// ======================

let desconto = 0;

function aplicarCupom(codigo){

if(codigo === "XPLAY10"){

desconto = 10;

notificar(
"🎁 Cupom aplicado! 10% OFF"
);

}

else if(codigo === "XPLAY20"){

desconto = 20;

notificar(
"🔥 Cupom aplicado! 20% OFF"
);

}

else{

notificar(
"❌ Cupom inválido"
);

}

}

// ======================
// ATALHO CUPOM
// ======================

document.addEventListener(
"keydown",
e => {

if(e.key === "F7"){

aplicarCupom(
"XPLAY20"
);

}

}
);

// ======================
// EVENTOS ALEATÓRIOS
// ======================

const eventos = [

"🔥 Promoção relâmpago iniciada!",
"🎮 Novo jogo adicionado!",
"🏆 Evento especial disponível!",
"💎 Recompensa diária liberada!",
"🚀 Atualização da plataforma!"

];

setInterval(() => {

const evento =
eventos[
Math.floor(
Math.random() *
eventos.length
)
];

notificar(evento);

},120000);

// ======================
// RECOMPENSA DIÁRIA
// ======================

setTimeout(() => {

moedas += 500;

const coinBox =
document.querySelector(
".coin-value"
);

if(coinBox){

coinBox.innerText =
moedas.toLocaleString(
"pt-BR"
);

}

notificar(
"💰 Recompensa diária: +500 X-Coins"
);

},5000);

// ======================
// LOJA PREMIUM
// ======================

let premium = false;

document.addEventListener(
"keydown",
e => {

if(e.key === "F9"){

premium = true;

notificar(
"⭐ X-PLAY PASS ATIVADO!"
);

desbloquear(
"Assinante Premium"
);

}

}
);

// ======================
// BÔNUS PREMIUM
// ======================

setInterval(() => {

if(premium){

moedas += 100;

const coinBox =
document.querySelector(
".coin-value"
);

if(coinBox){

coinBox.innerText =
moedas.toLocaleString(
"pt-BR"
);

}

}

},60000);

// ======================
// CONQUISTA ESPECIAL
// ======================

setTimeout(() => {

desbloquear(
"Explorador da X-PLAYSTOR"
);

},10000);

console.log(
"PT 5 carregada!"
);
