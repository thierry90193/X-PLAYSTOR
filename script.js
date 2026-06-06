// X-PLAYSTOR

console.log("X-PLAYSTOR ONLINE 🚀");

// BUSCA

const search = document.querySelector(".search");

if(search){

search.addEventListener("keyup", () => {

const texto = search.value.toLowerCase();

const jogos = document.querySelectorAll(".game-card");

jogos.forEach(jogo => {

const nome = jogo.innerText.toLowerCase();

if(nome.includes(texto)){

jogo.style.display = "block";

}else{

jogo.style.display = "none";

}

});

});

}

// FAVORITAR

const favoritos = document.querySelectorAll(".wishlist-btn");

favoritos.forEach(btn => {

btn.addEventListener("click", () => {

btn.innerHTML = "❤️ ADICIONADO";

btn.style.background = "#ff4d7a";

});

});

// BOTÕES COMPRAR

const comprar = document.querySelectorAll(
".buy-btn,.offer-btn"
);

comprar.forEach(botao => {

botao.addEventListener("click", () => {

alert(
"🎮 Jogo adicionado ao carrinho!"
);

});

});

// BIBLIOTECA

const biblioteca =
document.querySelectorAll(".library-btn");

biblioteca.forEach(botao => {

botao.addEventListener("click", () => {

alert(
"🚀 Iniciando jogo..."
);

});

});
// ======================
// PERFIL DA FUNDADORA
// ======================

const perfil =
document.querySelector(".profile h4");

const avatar =
document.querySelector(".avatar");

const status =
document.querySelector(".profile span");

if(perfil){

perfil.innerText =
"thierry90193";

}

if(avatar){

avatar.innerText =
"T9";

avatar.style.background =
"linear-gradient(135deg,#8a4fff,#ffd700)";

avatar.style.fontWeight =
"bold";

}

if(status){

status.innerText =
"👑 FUNDADORA ONLINE";

status.style.color =
"#ffd700";

}

// ======================
// TAGS EXCLUSIVAS
// ======================

const profileBox =
document.querySelector(".profile");

if(profileBox){

const cargo =
document.createElement("div");

cargo.innerText =
"👑 DESENVOLVEDORA PREMIUM";

cargo.style.fontSize =
"11px";

cargo.style.color =
"#ffd700";

profileBox.appendChild(cargo);

const nivel =
document.createElement("div");

nivel.innerText =
"⭐ Nível DEV: 999";

nivel.style.fontSize =
"11px";

nivel.style.color =
"#66ff99";

profileBox.appendChild(nivel);

const selo =
document.createElement("div");

selo.innerText =
"💎 FUNDADORA DA X-PLAYSTOR";

selo.style.fontSize =
"11px";

selo.style.color =
"#66ccff";

profileBox.appendChild(selo);

}

// ======================
// BENEFÍCIO FUNDADORA
// ======================

setTimeout(() => {

notificar(
"👑 Conta de Fundadora Detectada"
);

},3000);

// ======================
// PAINEL DEV
// ======================

document.addEventListener(
"keydown",
e => {

if(e.key === "F10"){

notificar(
"🛠️ Painel da Fundadora Ativado"
);

moedas += 10000;

const coinBox =
document.querySelector(".coin-value");

if(coinBox){

coinBox.innerText =
moedas.toLocaleString("pt-BR");

}

}

}
);

// ======================
// RENDA PREMIUM
// ======================

setInterval(() => {

moedas += 100;

const coinBox =
document.querySelector(".coin-value");

if(coinBox){

coinBox.innerText =
moedas.toLocaleString("pt-BR");

}

},30000);

// ======================
// MODO FUNDADORA
// ======================

let segredo = [];

document.addEventListener(
"keydown",
e => {

segredo.push(e.key);

if(
segredo.join("").includes(
"xplaydev"
)
){

notificar(
"🚀 Modo Fundadora Ativado!"
);

moedas += 5000;

segredo = [];

}

}
);

// ======================
// MENSAGEM ESPECIAL
// ======================

setInterval(() => {

const mensagens = [

"👑 Bem-vinda, Fundadora!",
"💎 Sua plataforma está online!",
"🚀 X-PLAYSTOR funcionando perfeitamente!",
"⭐ Novos jogadores estão chegando!",
"🎮 Você é a criadora da X-PLAYSTOR!"

];

const msg =
mensagens[
Math.floor(
Math.random() *
mensagens.length
)
];

notificar(msg);

},60000);
window.addEventListener("load", () => {

const perfil =
document.querySelector(".profile h4");

const avatar =
document.querySelector(".avatar");

const status =
document.querySelector(".profile span");

if(perfil){
perfil.innerText = "thierry90193";
}

if(avatar){
avatar.innerText = "T9";
}

if(status){
status.innerText = "👑 FUNDADORA ONLINE";
}

});
// ======================
// CARRINHO PREMIUM
// ======================

let totalCarrinho = 0;

const precos = [
39.90,
69.90,
49.90,
99.90,
149.90
];

const carrinhoIcon =
document.querySelector(".cart-count");

document
.querySelectorAll(
".buy-btn,.offer-btn"
)
.forEach(btn => {

btn.addEventListener("click", () => {

const preco =
precos[
Math.floor(
Math.random() *
precos.length
)
];

totalCarrinho += preco;

if(carrinhoIcon){

carrinhoIcon.innerText =
Math.round(
totalCarrinho / 50
);

}

notificar(
"🛒 Item adicionado!"
);

});

});

// ======================
// TOTAL DO CARRINHO
// ======================

const totalBox =
document.createElement("div");

totalBox.id =
"xplay-total";

totalBox.style.position =
"fixed";

totalBox.style.bottom =
"20px";

totalBox.style.left =
"20px";

totalBox.style.background =
"#1b1f2c";

totalBox.style.padding =
"15px";

totalBox.style.borderRadius =
"12px";

totalBox.style.zIndex =
"9999";

totalBox.innerHTML =
"🛒 Total: R$ 0,00";

document.body.appendChild(
totalBox
);

setInterval(() => {

totalBox.innerHTML =
"🛒 Total: R$ " +
totalCarrinho.toFixed(2);

},500);

// ======================
// FINALIZAR COMPRA
// ======================

const finalizar =
document.createElement("button");

finalizar.innerText =
"💳 Finalizar Compra";

finalizar.style.position =
"fixed";

finalizar.style.bottom =
"80px";

finalizar.style.left =
"20px";

finalizar.style.padding =
"12px";

finalizar.style.border =
"none";

finalizar.style.borderRadius =
"12px";

finalizar.style.cursor =
"pointer";

finalizar.style.zIndex =
"9999";

document.body.appendChild(
finalizar
);

finalizar.addEventListener(
"click",
() => {

if(totalCarrinho <= 0){

notificar(
"🛒 Seu carrinho está vazio!"
);

return;

}

notificar(
"✅ Compra concluída!"
);

totalCarrinho = 0;

if(carrinhoIcon){

carrinhoIcon.innerText =
"0";

}

}
);

// ======================
// CUPOM DEV
// ======================

document.addEventListener(
"keydown",
e => {

if(e.key === "F8"){

totalCarrinho =
totalCarrinho * 0.5;

notificar(
"🎁 Cupom DEV aplicado! -50%"
);

}

}
);

// ======================
// PRESENTE DA FUNDADORA
// ======================

setTimeout(() => {

notificar(
"👑 thierry90193 recebeu um cupom exclusivo!"
);

},7000);
