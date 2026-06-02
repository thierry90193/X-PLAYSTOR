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
