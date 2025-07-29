// Mostrar mensagem
function mostrarMensagem() {
  const secao = document.getElementById("mensagem");
  secao.style.display = "block";
}

// Define título do CTA de acordo com o idioma
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.getElementById("contato-titulo");
  const lang = navigator.language || navigator.userLanguage;

  if (lang.startsWith("pt")) {
    titulo.textContent = "Faça uma consulta sem compromisso agora!";
  } else if (lang.startsWith("de")) {
    titulo.textContent = "Jetzt unverbindlich anfragen!";
  } else {
    titulo.textContent = "Request your free consultation now!";
  }

  // Feedback ao clicar no botão
  document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.style.transform = "scale(0.98)";
      setTimeout(() => { btn.style.transform = "scale(1)"; }, 150);
    });
  });
});

