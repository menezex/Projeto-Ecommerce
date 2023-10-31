const carrinho = document.getElementById("carrinho-de-produtos");
const celulares = document.querySelectorAll(".cardCelular");
const fones = document.querySelectorAll(".cardFones");
const computadores = document.querySelectorAll(".cardComputador");
const notebook = document.querySelectorAll(".cardNotebook");

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
