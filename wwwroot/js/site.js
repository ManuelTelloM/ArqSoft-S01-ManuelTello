/* =========================================================
   ASSASSIN'S CREED - LEGIBILITY OPTIMIZED (RED & CHALK)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

    const unityColors = {
        crimson: "#7A0000",      // Rojo sangre profundo
        blood: "#B20000",        // Rojo medio
        chalkWhite: "#F0F0F0",   // Blanco tiza (Texto Principal)
        ashGray: "#B0B0B0",      // Gris ceniza (Texto Secundario)
        paleGold: "#D4AF37",     // Dorado antiguo (Acentos/Highlights)
        deepBlack: "#050000"     // Fondo de alto contraste
    };

    // Suavizado de carga
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.5s ease";
    setTimeout(() => { document.body.style.opacity = "1"; }, 200);

    // Efecto de movimiento en Hero y Logo
    const hero = document.querySelector(".hero");
    const logo = document.querySelector(".unity-logo");

    window.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;
        if (hero) hero.style.transform = `translate(${x}px, ${y}px)`;
        if (logo) logo.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
    });

    // Tarjetas con mejor contraste de lectura
    const cards = document.querySelectorAll(".catalog-card, .product-card, .card");
    cards.forEach(card => {
        card.style.transition = "all .4s ease-out";
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
            card.style.background = "rgba(20, 0, 0, 0.95)"; // Fondo más oscuro al hacer hover para leer mejor
            card.style.border = `1px solid ${unityColors.blood}`;
            card.style.boxShadow = "0 15px 40px rgba(0,0,0,0.9)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0px)";
            card.style.background = "rgba(10, 0, 0, 0.75)";
            card.style.border = "1px solid rgba(178,0,0,0.2)";
        });
    });

    // Botones con alta visibilidad
    const buttons = document.querySelectorAll(".catalog-btn, .product-btn, .unity-btn");
    buttons.forEach(btn => {
        btn.style.transition = "all .3s ease";
        btn.style.fontWeight = "bold";
        btn.style.textTransform = "uppercase";

        btn.addEventListener("mouseenter", () => {
            btn.style.background = unityColors.chalkWhite;
            btn.style.color = unityColors.deepBlack; // Contraste invertido
            btn.style.boxShadow = `0 0 20px ${unityColors.chalkWhite}`;
            btn.style.transform = "scale(1.05)";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.background = unityColors.blood;
            btn.style.color = unityColors.chalkWhite;
            btn.style.boxShadow = "none";
            btn.style.transform = "scale(1)";
        });
    });
});

/* =========================================================
   ESTILOS CSS DINÁMICOS - FOCO EN LEGIBILIDAD
========================================================= */
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
    body {
        background-color: #050000;
        color: #F0F0F0;
        font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        line-height: 1.6;
    }

    /* Fondo degradado inspirado en image_0bd392.png */
    body::after {
        content: "";
        position: fixed;
        inset: 0;
        background: radial-gradient(circle at center, #8B0000 0%, #050000 85%);
        opacity: 0.6;
        z-index: -1;
        pointer-events: none;
    }

    /* Títulos: Blanco puro para resaltar sobre el rojo */
    h1, h2, h3, .unity-title {
        color: #FFFFFF !important;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(178,0,0,0.5);
        font-weight: 800;
        letter-spacing: 1px;
    }

    /* Párrafos: Gris claro para no cansar la vista */
    p, li, .description {
        color: #D1D1D1 !important;
        font-size: 1.05rem;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.9);
    }

    /* Acentos y enlaces: Dorado pálido (Legible en oscuro y rojo) */
    strong, b, .highlight, .unity-accent {
        color: #D4AF37 !important; 
        font-weight: 700;
    }

    a {
        color: #FF4D4D; /* Rojo claro para enlaces */
        text-decoration: underline;
        transition: 0.3s;
    }

    a:hover {
        color: #FFFFFF;
        text-shadow: 0 0 10px #FF4D4D;
    }

    .card {
        padding: 20px;
        border-radius: 8px;
        backdrop-filter: blur(10px);
    }
`;
document.head.appendChild(styleSheet);