const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.boxShadow =
"0 15px 40px rgba(255,77,0,.35)";

});

card.addEventListener("mouseleave", () => {

card.style.boxShadow = "none";

});

});



// =========================
// EFECTO NAVBAR AL SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("activo");
    } else {
        navbar.classList.remove("activo");
    }
});


// =========================
// ANIMACIÓN AL HACER SCROLL
// =========================

const elementos = document.querySelectorAll(".card, .titulo, .galeria img, .hero-content");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

elementos.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// =========================
// EFECTO BOTONES DINÁMICOS
// =========================

const botones = document.querySelectorAll(".btn");

botones.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.transition = "0.3s";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });

});


// =========================
// SCROLL SUAVE AUTOMÁTICO
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});