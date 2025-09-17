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

const I18N = {
  en: {
    // HEADER
    "tagline": "✨Die Marias Your professional cleaning in good hands!",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // SOBRE
    "about.title": "Cleaning you can trust!",
    "about.text": "We make sure your workplaces are always clean, welcoming and hygienic — with reliability, dedication and tailored to your needs.",
    "about.badge": "Fair Prices & Flexible Hours",
    "about.whyBtn": "Why choose Die Marias?",
    "about.whyMsg": "🌟 We’re a team of determined women who care for your space with care, excellence and responsibility!",

    // CALL TO ACTION
    "cta.title": "Request your free consultation now!",
    "cta.email": "E‑mail",
    "cta.whatsapp": "WhatsApp",

    // FORMULÁRIO
    "form.title": "Send a message",
    "form.subtitle": "I'll reply as soon as possible 😊",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.send": "Send",
    "form.phone": "Phone",
    "form.channel": "How did you hear about Die Marias?",
    "form.select": "Select…",
    "form.option.facebook": "Facebook",
    "form.option.instagram": "Instagram",
    "form.option.linkedin": "LinkedIn",
    "form.option.tiktok": "TikTok",
    "form.option.google": "Google",
    "form.option.referral": "Referral",
    "form.option.event": "Event",
    "form.option.other": "Other",
    "form.namePlaceholder": "Enter your name...",
    "form.emailPlaceholder": "Enter your email...",
    "form.messagePlaceholder": "Type your message here...",


    // ÍCONES DE SERVIÇOS
    "icons.section": "Our Cleaning Services",
    "icons.title": "Cleaning with the Highest Quality Standards",
    "icons.regular": "Regular Cleaning",
    "icons.dusting": "Dusting",
    "icons.vacuum": "Vacuuming",
    "icons.mopping": "Mopping",

    // SOMOS 

     "mission.title": "Mission",
        "mission.text": "Make every environment healthier, more welcoming and productive with professional cleaning that is trustworthy, consistent, and detail-oriented.",
        "vision.title": "Vision",
        "vision.text": "To be recognized as the best cleaning company in the Berlin/Brandenburg region, standing out for our service quality, team professionalism, and commitment to customer satisfaction.",
        "values.title": "Values",
        "values.item1": "Punctuality and respect for your routine",
        "values.item2": "Transparent pricing and final check",
        "values.item3": "Visible quality with area-specific checklists",
        "values.item4": "Appropriate products and sustainability whenever possible",
        "values.item5": "Continuous improvement through training",

        "company.title": "Die Marias",
        "company.text1": "You get a trained and supervised team to deliver the same result every visit, with a tailored plan, area-specific checklists and ideal frequency, clear pricing, no mandatory loyalty, fast communication in PT · EN · DE, and correct products for each surface — avoiding damage and ensuring real social proof.",
        "company.text2": "We guarantee your satisfaction: if something is not as agreed, we’ll fix it. We work with limited slots per neighborhood to maintain quality, so be sure to book your regular time in advance. We offer free estimates with maintenance suggestions and respond the same day via WhatsApp so you can get started fast and stress-free.",
        "company.text3": "Want a flawless space, worry-free? Contact Die Marias now and receive a personalized cleaning plan within minutes.",

    // SERVIÇOS (Cards do carrossel)
    "services.title": "Our Services",
    "services.office.title": "Office",
    "services.office.subtitle": "Productive Environment",
    "services.clinic.title": "Clinics",
    "services.clinic.subtitle": "Impeccable Hygiene",
    "services.bakery.title": "Bakeries",
    "services.bakery.subtitle": "Daily Trust",
    "services.restaurant.title": "Restaurants",
    "services.restaurant.subtitle": "Safe Shine",
    "services.retail.title": "Retail",
    "services.retail.subtitle": "First Impression",
    "services.stairs.title": "Staircases",
    "services.stairs.subtitle": "Cared Details",
    "services.postren.title": "Post-renovation",
    "services.postren.subtitle": "Renewed Space",
    "services.apt.title": "Apartments",
    "services.apt.subtitle": "Instant Comfort",
    "services.home.title": "Homes",
    "services.home.subtitle": "Everyday Well-being",

    // TESTEMUNHOS
    "testimonials.title": "What our customers say",
    "testimonials.subtitle": "See what our clients say about our cleaning services.",
    "testimonials.badge": "Excellent",
    "testimonials.count": "• 43 reviews",
    "testimonials.review1": "I hired Die Marias for my office and was very satisfied. Punctual, attentive, and flawless results. My family is delighted. The women working are dedicated, responsible, collaborative, and detail-oriented. I love cleaning day because it feels like a beautiful encounter. With small children, I need help when family isn't around — and I found that in your team. It’s a big expense, but now we see it as necessary. We are very grateful.",
    "testimonials.review2": "We are super happy with Viviane, she's doing a great job. We'll now continue with the bi-weekly appointments.",
    "testimonials.review3": "Fast and friendly service. I requested a deep cleaning and everything was spotless. Great communication and organization.",
    "testimonials.leaveReview": "⭐ Leave your review on Google",
    // ÁREA ATENDIDA
    "area.title": "We currently serve",
    "area.text": "Berlin, Potsdam, Schönefeld, Oranienburg, Bernau, Teltow Stadt and all neighboring areas around Berlin. More cities coming soon!",

    // FOOTER
    "footer.follow": "Follow us"
  },

  pt: {
    "tagline": "✨Die Marias Sua limpeza profissional em boas mãos!",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.contact": "Contato",

    "about.title": "Limpeza que você pode confiar!",
    "about.text": "Garantimos seus ambientes sempre limpos, acolhedores e higiênicos — com confiabilidade, dedicação e sob medida para a sua necessidade.",
    "about.badge": "Preços Justos & Horários Flexíveis",
    "about.whyBtn": "Por que escolher a Die Marias?",
    "about.whyMsg": "🌟 Somos um time de mulheres determinadas que cuidam do seu espaço com carinho, excelência e responsabilidade!",

    "cta.title": "Peça sua consulta gratuita agora!",
    "cta.email": "E‑mail",
    "cta.whatsapp": "WhatsApp",

    "form.title": "Envie uma mensagem",
    "form.subtitle": "Respondo o mais rápido possível 😊",
    "form.name": "Nome",
    "form.email": "E-mail",
    "form.message": "Mensagem",
    "form.send": "Enviar",
    "form.phone": "Telefone",
    "form.channel": "Como ficou sabendo da Die Marias?",
    "form.select": "Selecione…",
    "form.option.facebook": "Facebook",
    "form.option.instagram": "Instagram",
    "form.option.linkedin": "LinkedIn",
    "form.option.tiktok": "TikTok",
    "form.option.google": "Google",
    "form.option.referral": "Indicação",
    "form.option.event": "Evento",
    "form.option.other": "Outros",
    "form.namePlaceholder": "Digite seu nome...",
    "form.emailPlaceholder": "Digite seu e-mail...",
    "form.messagePlaceholder": "Digite sua mensagem aqui...",


    "icons.section": "Nossos Serviços de Limpeza",
    "icons.title": "Limpeza com os Mais Altos Padrões de Qualidade",
    "icons.regular": "Limpeza Regular",
    "icons.dusting": "Tirar pó",
    "icons.vacuum": "Aspirar",
    "icons.mopping": "Passar pano",
    // --- CORREÇÃO: PT (Missão, Visão, Valores + textos institucionais) ---
    "mission.title": "Missão",
    "mission.text": "Tornar cada ambiente mais saudável, acolhedor e produtivo com limpeza profissional de confiança, padrão consistente e atenção real aos detalhes.",
    "vision.title": "Visão",
    "vision.text": "Ser reconhecida como a melhor empresa de limpeza da região de Berlim/Brandemburgo, destacando-nos pela qualidade do serviço, profissionalismo da equipe e compromisso com a satisfação do cliente.",
    "values.title": "Valores",
    "values.item1": "Pontualidade e respeito à sua rotina",
    "values.item2": "Transparência do orçamento à checagem final",
    "values.item3": "Qualidade visível com checklists por área",
    "values.item4": "Produtos adequados e sustentabilidade quando possível",
    "values.item5": "Melhoria contínua por meio de treinamento",

    "company.title": "Die Marias",
    "company.text1": "Você recebe uma equipe treinada e supervisionada para entregar o mesmo resultado em toda visita, um plano sob medida com checklists por área e frequência ideal, orçamento claro e sem fidelidade obrigatória, comunicação ágil em PT · EN · DE e os produtos corretos para cada superfície — evitando danos e garantindo prova social real.",
    "company.text2": "Garantimos sua satisfação: se algo ficar fora do combinado, revisamos. Trabalhamos com agenda limitada por bairro para manter a qualidade — então, reservar seu horário com antecedência garante prioridade. Oferecemos orçamento gratuito com sugestões de manutenção e respondemos no mesmo dia pelo WhatsApp para você começar rápido e sem dor de cabeça.",
    "company.text3": "Quer um ambiente impecável, sem preocupação? Fale com a Die Marias agora e receba um plano de limpeza personalizado em minutos.",

    "services.title": "Nossos Serviços",
    "services.office.title": "Escritórios",
    "services.office.subtitle": "Ambiente produtivo",
    "services.clinic.title": "Consultórios",
    "services.clinic.subtitle": "Higiene impecável",
    "services.bakery.title": "Padarias",
    "services.bakery.subtitle": "Confiança diária",
    "services.restaurant.title": "Restaurantes",
    "services.restaurant.subtitle": "Brilho seguro",
    "services.retail.title": "Comércios",
    "services.retail.subtitle": "Boa primeira impressão",
    "services.stairs.title": "Escadarias",
    "services.stairs.subtitle": "Detalhes bem cuidados",
    "services.postren.title": "Pós-obra",
    "services.postren.subtitle": "Ambiente renovado",
    "services.apt.title": "Apartamentos",
    "services.apt.subtitle": "Conforto instantâneo",
    "services.home.title": "Residências",
    "services.home.subtitle": "Bem-estar no dia a dia",

    "testimonials.title": "O que nossos clientes dizem",
    "testimonials.subtitle": "Veja o que nossos clientes falam sobre nossos serviços de limpeza.",
    "testimonials.badge": "Excelente",
    "testimonials.count": "• 43 avaliações",
    "testimonials.review1": "Contratei a Die Marias para o meu escritório e fiquei muito satisfeita. Pontuais, atenciosas e o resultado impecável. Recomendo! Minha família está encantada. As mulheres que trabalham são muito dedicadas ao seu trabalho, responsáveis, colaborativas e detalhistas. Amo o dia de limpeza porque minha casa é o dia do encontro bonito. Com crianças pequenas, é necessário que eu tenha uma ajuda quando a família não estiver. E foi isso que eu descobri com você. É uma despesa grande, mas agora a vemos como necessária. Estamos muito gratos.",
    "testimonials.review2": "Estamos super felizes com a Colaboradora Viviane, ela está fazendo um ótimo trabalho. Podemos agora continuar com o agendamento a cada 2 semanas.",
    "testimonials.review3": "Atendimento rápido e simpático. Solicitei limpeza profunda e tudo ficou impecável. Ótima comunicação e organização.",
    "testimonials.leaveReview": "⭐ Deixe sua avaliação no Google",

    "area.title": "Atendemos atualmente",
    "area.text": "Berlim, Potsdam, Schönefeld, Oranienburg, Bernau, Teltow Stadt e áreas vizinhas de Berlim. Em breve mais cidades!",

    "footer.follow": "Siga-nos"
  },

  de: {
    "tagline": "✨Die Marias Ihre professionelle Reinigung in guten Händen!",
    "nav.about": "Über uns",
    "nav.services": "Leistungen",
    "nav.contact": "Kontakt",

    "about.title": "Reinigung, der Sie vertrauen können!",
    "about.text": "Wir sorgen dafür, dass Ihre Arbeitsplätze stets sauber, einladend und hygienisch sind – zuverlässig, engagiert und auf Ihre Bedürfnisse abgestimmt.",
    "about.badge": "Faire Preise & Flexible Zeiten",
    "about.whyBtn": "Warum Die Marias?",
    "about.whyMsg": "🌟 Wir sind ein Team entschlossener Frauen, die sich mit Sorgfalt, Exzellenz und Verantwortung um Ihren Raum kümmern!",

    "cta.title": "Fordern Sie jetzt Ihre kostenlose Beratung an!",
    "cta.email": "E‑Mail",
    "cta.whatsapp": "WhatsApp",

    "form.title": "Nachricht senden",
    "form.subtitle": "Ich antworte so schnell wie möglich 😊",
    "form.name": "Name",
    "form.email": "E-Mail",
    "form.message": "Nachricht",
    "form.send": "Senden",
    "form.phone": "Telefon",
    "form.channel": "Wie haben Sie von Die Marias erfahren?",
    "form.select": "Auswählen…",
    "form.option.facebook": "Facebook",
    "form.option.instagram": "Instagram",
    "form.option.linkedin": "LinkedIn",
    "form.option.tiktok": "TikTok",
    "form.option.google": "Google",
    "form.option.referral": "Empfehlung",
    "form.option.event": "Veranstaltung",
    "form.option.other": "Andere",
    "form.namePlaceholder": "Geben Sie Ihren Namen ein...",
    "form.emailPlaceholder": "Geben Sie Ihre E-Mail ein...",
    "form.messagePlaceholder": "Schreiben Sie hier Ihre Nachricht...",


    "icons.section": "Unsere Reinigungsleistungen",
    "icons.title": "Reinigung mit höchsten Qualitätsstandards",
    "icons.regular": "Regelmäßige Reinigung",
    "icons.dusting": "Abstauben",
    "icons.vacuum": "Staubsaugen",
    "icons.mopping": "Wischen",

    "mission.title": "Mission",
        "mission.text": "Jede Umgebung gesünder, einladender und produktiver machen – mit professioneller Reinigung, der man vertrauen kann, mit konsistentem Standard und echter Liebe zum Detail.",
        "vision.title": "Vision",
        "vision.text": "Als bestes Reinigungsunternehmen in der Region Berlin/Brandenburg anerkannt werden – durch Servicequalität, Teamprofessionalität und Engagement für Kundenzufriedenheit.",
        "values.title": "Werte",
        "values.item1": "Pünktlichkeit und Respekt für Ihre Routine",
        "values.item2": "Transparente Angebote bis zur Endkontrolle",
        "values.item3": "Sichtbare Qualität mit Bereichs-Checklisten",
        "values.item4": "Geeignete Produkte und Nachhaltigkeit, wenn möglich",
        "values.item5": "Ständige Verbesserung durch Schulungen",

        "company.title": "Die Marias",
        "company.text1": "Sie erhalten ein geschultes und überwachtes Team, das bei jedem Besuch das gleiche Ergebnis liefert – mit maßgeschneidertem Plan, Bereichs-Checklisten und idealer Frequenz, transparentem Preis, keiner Bindung, schneller Kommunikation auf PT · EN · DE und den richtigen Produkten für jede Oberfläche – Schäden werden vermieden und echte soziale Beweise geliefert.",
        "company.text2": "Wir garantieren Ihre Zufriedenheit: Wenn etwas nicht wie vereinbart ist, korrigieren wir es. Wir arbeiten mit begrenzten Slots pro Stadtteil, um die Qualität zu sichern – buchen Sie also rechtzeitig. Wir bieten kostenlose Kostenvoranschläge mit Wartungstipps und antworten am selben Tag über WhatsApp – damit Sie schnell und sorgenfrei loslegen können.",
        "company.text3": "Sie möchten eine makellose Umgebung ohne Sorgen? Kontaktieren Sie Die Marias jetzt und erhalten Sie innerhalb von Minuten einen individuellen Reinigungsplan.",
    
    "services.title": "Unsere Leistungen",
    "services.office.title": "Büros",
    "services.office.subtitle": "Produktives Umfeld",
    "services.clinic.title": "Praxen",
    "services.clinic.subtitle": "Makellose Hygiene",
    "services.bakery.title": "Bäckereien",
    "services.bakery.subtitle": "Tägliches Vertrauen",
    "services.restaurant.title": "Restaurants",
    "services.restaurant.subtitle": "Sicherer Glanz",
    "services.retail.title": "Einzelhandel",
    "services.retail.subtitle": "Guter erster Eindruck",
    "services.stairs.title": "Treppenhäuser",
    "services.stairs.subtitle": "Sorgfältige Details",
    "services.postren.title": "Nach Renovierung",
    "services.postren.subtitle": "Erneuerter Raum",
    "services.apt.title": "Wohnungen",
    "services.apt.subtitle": "Sofortiger Komfort",
    "services.home.title": "Häuser",
    "services.home.subtitle": "Wohlbefinden im Alltag",

    "testimonials.title": "Was unsere Kund:innen sagen",
    "testimonials.subtitle": "Sehen Sie, was unsere Kund:innen über unsere Reinigungsservices sagen.",
    "testimonials.badge": "Hervorragend",
    "testimonials.count": "• 43 Bewertungen",
    "testimonials.review1": "Ich habe Die Marias für mein Büro engagiert und war sehr zufrieden. Pünktlich, aufmerksam und makellose Ergebnisse. Meine Familie ist begeistert. Die Frauen sind engagiert, verantwortungsbewusst, kooperativ und sehr genau. Ich liebe den Reinigungstag, denn mein Zuhause fühlt sich dann besonders schön an. Mit kleinen Kindern brauche ich Hilfe, wenn die Familie nicht da ist – und genau das habe ich bei euch gefunden. Es ist eine große Ausgabe, aber jetzt sehen wir es als notwendig an. Wir sind sehr dankbar.",
    "testimonials.review2": "Wir sind sehr zufrieden mit Viviane, sie macht einen tollen Job. Wir machen jetzt mit den Terminen alle zwei Wochen weiter.",
    "testimonials.review3": "Schneller und freundlicher Service. Ich habe eine Tiefenreinigung angefordert und alles war perfekt. Tolle Kommunikation und Organisation.",
    "testimonials.leaveReview": "⭐ Hinterlassen Sie Ihre Bewertung auf Google",
    "area.title": "Wir sind derzeit aktiv in",
    "area.text": "Berlin, Potsdam, Schönefeld, Oranienburg, Bernau, Teltow Stadt und alle angrenzenden Gebiete rund um Berlin. Weitere Städte folgen!",

    "footer.follow": "Folgen Sie uns"
  }
};

// Aplica traduções em texto e atributos (placeholder/value/aria-label)
function applyTranslations(lang) {
  const dict = I18N[lang] || {};

  // 1) texto interno
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  // 2) placeholder (inputs/textarea)
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });

  // 3) value (ex.: <input type="submit">)
  document.querySelectorAll("[data-i18n-value]").forEach((el) => {
    const key = el.getAttribute("data-i18n-value");
    if (dict[key] != null) el.setAttribute("value", dict[key]);
  });

  // 4) aria-label (acessibilidade)
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });
}

// Função global de troca de idioma
window.changeLanguage = function (lang) {
  applyTranslations(lang);                                 // (1) aplica
  document.documentElement.setAttribute("lang", lang);     // (2) <html lang="">
  const btn = document.getElementById("language-btn");     // (3) botão
  if (btn) btn.innerHTML = `${lang.toUpperCase()} <span style="margin-left:5px;">▼</span>`;
  if (langOptions) langOptions.style.display = "none";     // (4) fecha
  localStorage.setItem("dm_lang", lang);                   // (5) persiste
};

// Inicializa idioma (salvo > navegador > en)
(function initLanguage() {
  const saved = localStorage.getItem("dm_lang");
  const browser = (navigator.language || "en").slice(0, 2);
  const startLang = saved || (["en", "pt", "de"].includes(browser) ? browser : "en");
  changeLanguage(startLang);
})();

// Click nos itens do dropdown
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


window.playHeroAnimation = function () {
  const hero   = document.querySelector(".header-image");
  const title  = document.querySelector(".hero-title");
  const sub    = document.querySelector(".hero-sub");
  if (!hero || !title || !sub) return;

  // Respeita acessibilidade: usuários que preferem menos movimento
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    hero.style.opacity = 1;
    title.style.opacity = 1;
    sub.style.opacity   = 1;
    return;
  }

  // Limpa estados anteriores (se reexecutar)
  [hero, title, sub].forEach(el => { el.style.opacity = 0; el.style.transform = ""; });

  // 1) “Faixa” do hero descendo
  hero.animate(
    [
      { transform: "translateY(-40px)", opacity: 0 },
      { transform: "translateY(0)",     opacity: 1 }
    ],
    { duration: 900, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards", delay: 100 }
  );

  // 2) Título entrando da esquerda
  title.animate(
    [
      { transform: "translateX(-60px)", opacity: 0 },
      { transform: "translateX(0)",     opacity: 1 }
    ],
    { duration: 800, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards", delay: 650 }
  );

  // 3) Subtítulo aparecendo suave
  sub.animate(
    [
      { transform: "translateX(-16px)", opacity: 0 },
      { transform: "translateX(0)",     opacity: 1 }
    ],
    { duration: 700, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards", delay: 1100 }
  );
};

// Dispara no carregamento
document.addEventListener("DOMContentLoaded", () => {
  window.playHeroAnimation();
});

/* =============================
   HERO ANIMADO (JS/WAAPI)
============================= */

// Exponho para reusar se precisar (ex.: reexecutar ao trocar de rota)
window.playHeroAnimation = function () {
  const hero   = document.querySelector(".header-image");
  const title  = document.querySelector(".hero-title");
  const sub    = document.querySelector(".hero-sub");
  if (!hero || !title || !sub) return;

  // Respeita acessibilidade: usuários que preferem menos movimento
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    hero.style.opacity = 1;
    title.style.opacity = 1;
    sub.style.opacity   = 1;
    return;
  }

  // Limpa estados anteriores (se reexecutar)
  [hero, title, sub].forEach(el => { el.style.opacity = 0; el.style.transform = ""; });

  // 1) “Faixa” do hero descendo
  hero.animate(
    [
      { transform: "translateY(-40px)", opacity: 0 },
      { transform: "translateY(0)",     opacity: 1 }
    ],
    { duration: 900, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards", delay: 100 }
  );

  // 2) Título entrando da esquerda
  title.animate(
    [
      { transform: "translateX(-60px)", opacity: 0 },
      { transform: "translateX(0)",     opacity: 1 }
    ],
    { duration: 800, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards", delay: 650 }
  );

  // 3) Subtítulo aparecendo suave
  sub.animate(
    [
      { transform: "translateX(-16px)", opacity: 0 },
      { transform: "translateX(0)",     opacity: 1 }
    ],
    { duration: 700, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards", delay: 1100 }
  );
};

// Dispara no carregamento
// Menu hambúrguer
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

