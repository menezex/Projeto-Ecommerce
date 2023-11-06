const carrinho = document.getElementById("carrinho-de-produtos");
const celulares = document.querySelectorAll(".cardCelular");
const fones = document.querySelectorAll(".cardFones");
const computadores = document.querySelectorAll(".cardComputador");
const notebook = document.querySelectorAll(".cardNotebook");
let valorNoCarrinho = 0;
const produtosNoCarrinho = document.querySelector(".produtosNoCarrinho");

/* DADOS DO CARRINHO DE COMPRAS */
let input = document.createElement("input");
input.id = "valorDentroDoCarrinho";
input.className = "valorDentroDoCarrinho";
input.disabled = "True";
input.value = "Vazio";
carrinho.appendChild(input);

let produtos = {
  celular: 0,
  fone: 0,
  computador: 0,
  notebook: 0,
};

document
  .getElementById("btnCarrinho")
  .addEventListener("click", carrinhoCompra);

function carrinhoCompra() {
  carrinho.classList.toggle("carrinho-de-compra-enable");
  carrinho.classList.toggle("carrinho-de-compra");
}

document.getElementById("btnCelular").addEventListener("click", filtrarCelular);
document.getElementById("btnComputador").addEventListener("click", filtrarComp);
document.getElementById("btnFone").addEventListener("click", filtrarFone);
document.getElementById("btnNotebook").addEventListener("click", filtrarNot);

function filtrarCelular() {
  computadores.forEach((comp) => comp.classList.toggle("enable-produt"));
  fones.forEach((fon) => fon.classList.toggle("enable-produt"));
  notebook.forEach((not) => not.classList.toggle("enable-produt"));
}
function filtrarComp() {
  celulares.forEach((cel) => cel.classList.toggle("enable-produt"));
  fones.forEach((fon) => fon.classList.toggle("enable-produt"));
  notebook.forEach((not) => not.classList.toggle("enable-produt"));
}
function filtrarFone() {
  celulares.forEach((cel) => cel.classList.toggle("enable-produt"));
  computadores.forEach((comp) => comp.classList.toggle("enable-produt"));
  notebook.forEach((not) => not.classList.toggle("enable-produt"));
}
function filtrarNot() {
  celulares.forEach((cel) => cel.classList.toggle("enable-produt"));
  computadores.forEach((comp) => comp.classList.toggle("enable-produt"));
  fones.forEach((fon) => fon.classList.toggle("enable-produt"));
}

const liItemCel = document.createElement("li");
liItemCel.className = "liItemCel";

function pegarPrecoPhone() {
  valorNoCarrinho += Number(
    document.querySelector("#btnComprar1").previousElementSibling.firstChild
      .nextElementSibling.nextElementSibling.textContent
  );
  input.value = `R$ ${valorNoCarrinho.toFixed(2)}`;
  produtos.celular += 1;
  liItemCel.innerText = `Celular:
  Qtd: ${produtos.celular} x R$ 15.000`;
  produtosNoCarrinho.append(liItemCel);
}

document
  .querySelector("#btnComprar1")
  .addEventListener("click", pegarPrecoPhone);
document
  .querySelector("#btnComprar2")
  .addEventListener("click", pegarPrecoPhone);
document
  .querySelector("#btnComprar3")
  .addEventListener("click", pegarPrecoPhone);
document
  .querySelector("#btnComprar4")
  .addEventListener("click", pegarPrecoPhone);
/*------------------ FONE */

const liItemFone = document.createElement("li");
liItemFone.className = "liItemFone";

function pegarPrecoFone() {
  valorNoCarrinho += Number(
    document.querySelector("#btnComprar5").previousElementSibling.firstChild
      .nextElementSibling.nextElementSibling.textContent
  );
  input.value = `R$ ${valorNoCarrinho.toFixed(2)}`;
  produtos.fone += 1;
  liItemFone.innerText = `Fone:
  Qtd: ${produtos.fone} x R$ 1.100`;
  produtosNoCarrinho.append(liItemFone);
}

document
  .querySelector("#btnComprar5")
  .addEventListener("click", pegarPrecoFone);
document
  .querySelector("#btnComprar6")
  .addEventListener("click", pegarPrecoFone);
document
  .querySelector("#btnComprar7")
  .addEventListener("click", pegarPrecoFone);
/* ------------------ COMPUTADOR */

const liItemComp = document.createElement("li");
liItemComp.className = "liItemComp";

function pegarPrecoComp() {
  valorNoCarrinho += Number(
    document.querySelector("#btnComprar8").previousElementSibling.firstChild
      .nextElementSibling.nextElementSibling.textContent
  );
  input.value = `R$ ${valorNoCarrinho.toFixed(2)}`;
  produtos.computador += 1;
  liItemComp.innerText = `Computador:
  Qtd: ${produtos.computador} x R$ 3.500`;
  produtosNoCarrinho.append(liItemComp);
}
document
  .querySelector("#btnComprar8")
  .addEventListener("click", pegarPrecoComp);
document
  .querySelector("#btnComprar9")
  .addEventListener("click", pegarPrecoComp);

/* ------------------ Notebook */

const liItemNote = document.createElement("li");
liItemNote.className = "liItemNote";

function pegarPrecoNotebook() {
  valorNoCarrinho += Number(
    document.querySelector("#btnComprar10").previousElementSibling.firstChild
      .nextElementSibling.nextElementSibling.textContent
  );
  input.value = `R$ ${valorNoCarrinho.toFixed(2)}`;
  produtos.notebook += 1;
  liItemNote.innerText = `Notebook:
  Qtd: ${produtos.notebook} x R$ 5.500`;
  produtosNoCarrinho.append(liItemNote);
}
document
  .querySelector("#btnComprar10")
  .addEventListener("click", pegarPrecoNotebook);
document
  .querySelector("#btnComprar11")
  .addEventListener("click", pegarPrecoNotebook);
document
  .querySelector("#btnComprar12")
  .addEventListener("click", pegarPrecoNotebook);
