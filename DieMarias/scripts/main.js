document.addEventListener("DOMContentLoaded", () => {
  // Mostrar/esconder mensagem
  // Mostrar/esconder mensagem (altere este bloco)
const btnMensagem = document.getElementById("btn-porque");
const mensagem = document.getElementById("mensagem");

if (btnMensagem && mensagem) {
  btnMensagem.addEventListener("click", () => {
    mensagem.style.display = (mensagem.style.display === "none" || !mensagem.style.display) ? "block" : "none";
  });
}

  // Trocar título do CTA conforme idioma
  const titulo = document.getElementById("contato-titulo");
  const lang = navigator.language || navigator.userLanguage;
  if (titulo) {
    if (lang.startsWith("pt")) {
      titulo.textContent = "Faça uma consulta sem compromisso agora!";
    } else if (lang.startsWith("de")) {
      titulo.textContent = "Jetzt unverbindlich anfragen!";
    } else {
      titulo.textContent = "Request your free consultation now!";
    }
  }

  // Animação de clique nos botões de contato
  document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.style.transform = "scale(0.98)";
      setTimeout(() => { btn.style.transform = "scale(1)"; }, 150);
    });
  });

// Rolagem calculada pelo tamanho real do card + gap
window.scrollCarousel = function (direction) {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  const firstItem = carousel.querySelector(".carousel-item");
  if (!firstItem) return;

  const itemWidth = firstItem.getBoundingClientRect().width;
  const styles = getComputedStyle(carousel);
  const gap = parseInt(styles.gap || "0", 10);
  const step = itemWidth + gap;

  carousel.scrollBy({ left: direction * step, behavior: "smooth" });
};

  // Seletor de idioma
  const langBtn = document.getElementById("language-btn");
  const langOptions = document.getElementById("language-options");

  if (langBtn && langOptions) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      langOptions.style.display = langOptions.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
      if (!langBtn.contains(event.target) && !langOptions.contains(event.target)) {
        langOptions.style.display = "none";
      }
    });
  }

  // Função global para troca de idioma (só loga por enquanto)
  window.changeLanguage = function (lang) {
    console.log("Idioma selecionado:", lang);
  };
});
