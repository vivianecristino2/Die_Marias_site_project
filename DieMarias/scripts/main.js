/* =============================
   UI BÁSICO
============================= */



// Feedback de clique nos botões de contato
document.querySelectorAll(".contact-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.98)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});

// Carrossel (usa largura real do card + gap)
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

/* =============================
   DROPDOWN DE IDIOMA (UI)
============================= */

const langBtn = document.getElementById("language-btn");
const langOptions = document.getElementById("language-options");

// Abre/fecha o dropdown
if (langBtn && langOptions) {
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langOptions.style.display =
      langOptions.style.display === "block" ? "none" : "block";
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (event) => {
    if (!langBtn.contains(event.target) && !langOptions.contains(event.target)) {
      langOptions.style.display = "none";
    }
  });
}

/* =============================
   I18N – DICIONÁRIO E APLICAÇÃO
============================= */

// Dicionário (adicione mais chaves quando quiser)
const I18N = {
  en: {
    "tagline": "✨ Die Marias – Your professional cleaning in good hands!",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "about.title": "Cleaning you can trust!",
    "about.text":
      "We make sure your workplaces are always clean, welcoming and hygienic — with reliability, dedication and tailored to your needs.",
    "about.badge": "Fair Prices & Flexible Hours",
    "about.whyBtn": "Why choose Die Marias?",
    "about.whyMsg":
      "🌟 We’re a team of determined women who care for your space with care, excellence and responsibility!",
    "cta.title": "Request your free consultation now!",
    "cta.email": "E‑mail",
    "cta.whatsapp": "WhatsApp",
    "icons.section": "Our Cleaning Services",
    "icons.title": "Cleaning with the Highest Quality Standards",
    "icons.regular": "Regular Cleaning",
    "icons.dusting": "Dusting",
    "icons.vacuum": "Vacuuming",
    "icons.mopping": "Mopping",
    "services.title": "Our Services",
    "area.title": "We currently serve",
    "area.text":
      "Berlin, Potsdam, Schönefeld, Oranienburg, Bernau, Teltow Stadt and all neighboring areas around Berlin. More cities coming soon!",
    "footer.follow": "Follow us",
    "testimonials.title": "What our customers say",
    "testimonials.subtitle":
      "See what our clients say about our cleaning services.",
    "testimonials.badge": "Excellent",
    "testimonials.count": "• 43 reviews",
  },
  pt: {
    "tagline": "✨ Die Marias – Sua limpeza profissional em boas mãos!",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.contact": "Contato",
    "about.title": "Limpeza que você pode confiar!",
    "about.text":
      "Garantimos seus ambientes sempre limpos, acolhedores e higiênicos — com confiabilidade, dedicação e sob medida para a sua necessidade.",
    "about.badge": "Preços Justos & Horários Flexíveis",
    "about.whyBtn": "Por que escolher a Die Marias?",
    "about.whyMsg":
      "🌟 Somos um time de mulheres determinadas que cuidam do seu espaço com carinho, excelência e responsabilidade!",
    "cta.title": "Peça sua consulta gratuita agora!",
    "cta.email": "E‑mail",
    "cta.whatsapp": "WhatsApp",
    "icons.section": "Nossos Serviços de Limpeza",
    "icons.title": "Limpeza com os Mais Altos Padrões de Qualidade",
    "icons.regular": "Limpeza Regular",
    "icons.dusting": "Tirar pó",
    "icons.vacuum": "Aspirar",
    "icons.mopping": "Passar pano",
    "services.title": "Nossos Serviços",
    "area.title": "Atendemos atualmente",
    "area.text":
      "Berlim, Potsdam, Schönefeld, Oranienburg, Bernau, Teltow Stadt e áreas vizinhas de Berlim. Em breve mais cidades!",
    "footer.follow": "Siga-nos",
    "testimonials.title": "O que nossos clientes dizem",
    "testimonials.subtitle":
      "Veja o que nossos clientes falam sobre nossos serviços de limpeza.",
    "testimonials.badge": "Excelente",
    "testimonials.count": "• 43 avaliações",
  },
  de: {
    "tagline": "✨ Die Marias – Ihre professionelle Reinigung in guten Händen!",
    "nav.about": "Über uns",
    "nav.services": "Leistungen",
    "nav.contact": "Kontakt",
    "about.title": "Reinigung, der Sie vertrauen können!",
    "about.text":
      "Wir sorgen dafür, dass Ihre Arbeitsplätze stets sauber, einladend und hygienisch sind – zuverlässig, engagiert und auf Ihre Bedürfnisse abgestimmt.",
    "about.badge": "Faire Preise & Flexible Zeiten",
    "about.whyBtn": "Warum Die Marias?",
    "about.whyMsg":
      "🌟 Wir sind ein Team entschlossener Frauen, die sich mit Sorgfalt, Exzellenz und Verantwortung um Ihren Raum kümmern!",
    "cta.title": "Fordern Sie jetzt Ihre kostenlose Beratung an!",
    "cta.email": "E‑Mail",
    "cta.whatsapp": "WhatsApp",
    "icons.section": "Unsere Reinigungsleistungen",
    "icons.title": "Reinigung mit höchsten Qualitätsstandards",
    "icons.regular": "Regelmäßige Reinigung",
    "icons.dusting": "Abstauben",
    "icons.vacuum": "Staubsaugen",
    "icons.mopping": "Wischen",
    "services.title": "Unsere Leistungen",
    "area.title": "Wir sind derzeit aktiv in",
    "area.text":
      "Berlin, Potsdam, Schönefeld, Oranienburg, Bernau, Teltow Stadt und alle angrenzenden Gebiete rund um Berlin. Weitere Städte folgen!",
    "footer.follow": "Folgen Sie uns",
    "testimonials.title": "Was unsere Kund:innen sagen",
    "testimonials.subtitle":
      "Sehen Sie, was unsere Kund:innen über unsere Reinigungsservices sagen.",
    "testimonials.badge": "Hervorragend",
    "testimonials.count": "• 43 Bewertungen",
  },
};

// Aplica as traduções nos elementos com data-i18n
function applyTranslations(lang) {
  const dict = I18N[lang] || {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

// Função global de troca de idioma
window.changeLanguage = function (lang) {
  // 1) aplica textos
  applyTranslations(lang);

  // 2) define lang no <html>
  document.documentElement.setAttribute("lang", lang);

  // 3) atualiza label do botão
  const btn = document.getElementById("language-btn");
  if (btn) btn.innerHTML = `${lang.toUpperCase()} <span style="margin-left:5px;">▼</span>`;

  // 4) fecha dropdown
  if (langOptions) langOptions.style.display = "none";

  // 5) persiste escolha
  localStorage.setItem("dm_lang", lang);
};

// Inicializa idioma (salvo > navegador > en)
(function initLanguage() {
  const saved = localStorage.getItem("dm_lang");
  const browser = (navigator.language || "en").slice(0, 2);
  const startLang = saved || (["en", "pt", "de"].includes(browser) ? browser : "en");
  changeLanguage(startLang);
})();

// Click nos itens do dropdown (usa data-lang; fallback para texto do LI)
document.querySelectorAll("#language-options li").forEach((li) => {
  li.addEventListener("click", (e) => {
    e.stopPropagation();
    const lang = li.dataset.lang || li.textContent.trim().toLowerCase();
    changeLanguage(lang);
  });
});


emailjs.init({
  publicKey: 'SUA_PUBLIC_KEY', 
});

const EMAILJS_SERVICE_ID  = 'service_diemarias'; // o que você criou
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // do template
