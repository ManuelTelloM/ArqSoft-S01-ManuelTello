/* =========================================================
   ASSASSIN'S CREED MIRAGE - JAVASCRIPT CINEMATOGRÁFICO
   Paleta: azul noche / naranja neón / humo naranja
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const unityColors = {
        gold: "#FF4500",
        goldLight: "#FF7000",
        goldDark: "#CC2200",
        blue: "#1A3A5C",
        deepBlue: "#0D1F35",
        nightBlue: "#071428",
        smoke: "rgba(255,69,0,0.45)",
        glassBlue: "rgba(13,31,53,0.75)"
    };

    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.8s ease";
    setTimeout(() => { document.body.style.opacity = "1"; }, 250);

    const hero = document.querySelector(".hero");
    const logo = document.querySelector(".unity-logo");

    window.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 45;
        const y = (window.innerHeight / 2 - e.clientY) / 45;
        if (hero) hero.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
        if (logo) logo.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
    });

    const cards = document.querySelectorAll(".catalog-card, .product-card, .card");
    cards.forEach(card => {
        card.style.transition = "all .45s ease";
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) scale(1.02)";
            card.style.background = "linear-gradient(135deg, rgba(26,58,92,0.75), rgba(13,31,53,0.60))";
            card.style.backdropFilter = "blur(16px)";
            card.style.border = "1px solid rgba(255,69,0,0.50)";
            card.style.boxShadow = "0 20px 50px rgba(7,20,40,0.60), 0 0 25px rgba(255,69,0,0.35), 0 0 45px rgba(26,58,92,0.25)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0px) scale(1)";
            card.style.boxShadow = "0 10px 25px rgba(7,20,40,0.40)";
        });
    });

    const buttons = document.querySelectorAll(".catalog-btn, .product-btn, .unity-btn");
    buttons.forEach(btn => {
        btn.style.transition = "all .35s ease";
        btn.addEventListener("mouseenter", () => {
            btn.style.background = `linear-gradient(135deg, ${unityColors.goldLight}, ${unityColors.gold})`;
            btn.style.boxShadow = "0 0 18px rgba(255,69,0,0.70), 0 0 40px rgba(255,69,0,0.40)";
            btn.style.transform = "translateY(-3px) scale(1.03)";
            btn.style.letterSpacing = "2px";
            btn.style.color = "#071428";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0px) scale(1)";
            btn.style.boxShadow = "0 10px 22px rgba(255,69,0,0.35)";
            btn.style.letterSpacing = "1px";
            btn.style.color = "";
        });
    });

    const titles = document.querySelectorAll("h1, h2, h3, .unity-title");
    titles.forEach(title => {
        title.style.transition = "all .35s ease";
        title.addEventListener("mouseenter", () => {
            title.style.color = unityColors.goldLight;
            title.style.textShadow = "0 0 12px rgba(255,69,0,0.80), 0 0 30px rgba(255,69,0,0.50)";
        });
        title.addEventListener("mouseleave", () => {
            title.style.color = "";
            title.style.textShadow = "none";
        });
    });

    const particlesContainer = document.createElement("div");
    particlesContainer.classList.add("unity-particles");
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 40; i++) {
        const particle = document.createElement("span");
        particle.classList.add("unity-particle");
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = (Math.random() * 12 + 8) + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";
        particlesContainer.appendChild(particle);
    }

    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) el.classList.add("active");
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

});


/* =========================================================
   ESTILOS DINÁMICOS MIRAGE
========================================================= */
const unityStyle = document.createElement("style");

unityStyle.innerHTML = `

body {
    background-color: #071428;
    background-image: url("tu-imagen-mirage.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-blend-mode: overlay;
}

body::before {
    content: "";
    position: fixed;
    inset: 0;
    background:
        radial-gradient(ellipse at 80% 90%,  rgba(255,69,0,0.50), transparent 50%),
        radial-gradient(ellipse at 20% 100%, rgba(255,69,0,0.30), transparent 40%),
        radial-gradient(ellipse at 50% 0%,   rgba(26,58,92,0.55),  transparent 60%),
        rgba(7,20,40,0.55);
    pointer-events: none;
    z-index: 0;
}

.unity-particles {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 1;
}

.unity-particle {
    position: absolute;
    width: 2px;
    height: 100px;
    background: linear-gradient(
        to bottom,
        rgba(255,69,0,0),
        rgba(255,69,0,0.60),
        rgba(255,112,0,0.30),
        rgba(255,69,0,0)
    );
    filter: blur(.4px);
    animation: unityFloat linear infinite;
}

@keyframes unityFloat {
    0%   { transform: translateY(100vh);  opacity: 0; }
    15%  { opacity: .85; }
    100% { transform: translateY(-120vh); opacity: 0; }
}

.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 1s ease;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0px);
}

.catalog-card,
.product-card,
.card {
    backdrop-filter: blur(14px);
    background: linear-gradient(135deg, rgba(26,58,92,0.60), rgba(13,31,53,0.45));
    border: 1px solid rgba(255,69,0,0.35);
    color: #FF7000;
}

/* Títulos — naranja rojo ardiente */
h1, h2, h3, .unity-title {
    color: #FF4500;
    text-shadow: 0 0 10px rgba(255,69,0,0.50);
}

/* Texto general — naranja puro y brillante */
p, span, li {
    color: #FF6200;
}

/* Texto secundario */
small, label, caption {
    color: #DD3A00;
}

/* Acento — naranja máximo */
.unity-accent,
.unity-red,
strong, b {
    color: #FF7000;
    text-shadow: 0 0 8px rgba(255,112,0,0.55);
}

a {
    color: #FF4500;
    text-decoration: none;
}

a:hover {
    color: #FF7000;
    text-shadow: 0 0 10px rgba(255,112,0,0.65);
}

`;

document.head.appendChild(unityStyle);
