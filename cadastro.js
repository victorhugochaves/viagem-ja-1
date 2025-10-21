function VoltarCadastro(){
    window.location.href = "inicio.html"
}

function TrocarPerfil() {
  window.location.href = "perfil.html";
    const valor5 = document.getElementById("emailInput").value;
    localStorage.setItem("MeuValor5", valor5);
  
    const valor6 = document.getElementById("senhaInput").value;
    localStorage.setItem("MeuValor6", valor6);

    
  }

// --------------------------------------------------------------
