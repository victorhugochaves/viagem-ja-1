function VoltarPerfil(){
  window.location.href = "inicio.html"
}

window.onload = function() {
  const valor5 = localStorage.getItem("MeuValor5");
  document.getElementById("input-email").value = valor5;
  
  const valor6 = localStorage.getItem("MeuValor6");
  document.getElementById("input-senha").value = valor6;
}

function SalvarPerfil(){
  window.location.href = "inicio.html";
  alert("Seus dados foram salvos!")
}