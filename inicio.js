function TrocaPagina(){
  const valor1 = document.getElementById("origemInput").value;
    localStorage.setItem("meuValor1", valor1);
  const valor2 = document.getElementById("destinoInput").value;
    localStorage.setItem("meuValor2", valor2);
  const valor3 = document.getElementById("input-ida").value;
    localStorage.setItem("meuValor3", valor3); 
  const valor4 = document.getElementById("input-volta").value;
    localStorage.setItem("meuValor4", valor4);
    window.location.href = "buscar.html";
}
// ---------------------------------------------------------

function Cadastro(){
  window.location.href = "cadastro.html"
}

function Login(){
  window.location.href = "login.html"
}

// ---------------------------------------------------------


function MensagemDeBusca() {
    setTimeout(function() {
    alert('Busca encontrada');
  }, 1000);
}

// ----------------------------------------------------------

const estados = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" }
];

const datalist = document.getElementById('listaEstados');

estados.forEach(estado => {
  const option = document.createElement('option');
  option.value = estado.nome;
  datalist.appendChild(option);
});

// --------------------------------------------------------

const slides = document.querySelector('.slides');

slides.addEventListener('mouseover', () => {
  slides.style.animationPlayState = 'paused';
});

slides.addEventListener('mouseout', () => {
  slides.style.animationPlayState = 'running';
});