const planos =  document.querySelectorAll('#planos .text-planos');
const valuePrice = document.querySelector('#value h2');

planos.forEach(plano => {
    plano.addEventListener('click', () => {
      const preco = plano.querySelector('h3:last-of-type').textContent;
      valuePrice.textContent = preco;
    });
});
// -----------------------------------------------------------------------

window.onload = function() {
  const valor1 = localStorage.getItem("meuValor1");
  document.getElementById("origem2").value = valor1;
  const valor2 = localStorage.getItem("meuValor2");
  document.getElementById("destino2").value = valor2;
  const valor3 = localStorage.getItem("meuValor3");
  document.getElementById("ida2").value = valor3;
  const valor4 =localStorage.getItem("meuValor4");
  document.getElementById("volta2").value = valor4;
  var texto = document.getElementById("ida2").value;
  document.getElementById("meuP1").textContent = texto;
  var texto = document.getElementById("volta2").value;
  document.getElementById("meuP2").textContent = texto;
  var texto = document.getElementById("ida2").value;
  document.getElementById("meuP3").textContent = texto;
  var texto = document.getElementById("volta2").value;
  document.getElementById("meuP4").textContent = texto;
}

function Pagar(){
  window.location.href = "inicio.html"
  alert("Pagamento Efetuado")
}
// --------------------------------------------------------------------

function VoltarBusca(){
  window.location.href = "inicio.html"
}