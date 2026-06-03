// =========================
// ANIMACIÓN AL SCROLL (PRO)
// =========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});


// =========================
// EFECTO SUAVE BOTÓN
// =========================

const botones = document.querySelectorAll(".btn");

botones.forEach(btn => {

btn.addEventListener("mousemove", (e) => {

    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left;

    btn.style.background = `radial-gradient(circle at ${x}px center, #ff6a00, #ff4d00)`;

});

btn.addEventListener("mouseleave", () => {
    btn.style.background = "#ff4d00";
});

});


// =========================
// SCROLL SUAVE
// =========================

document.querySelectorAll('a[href^="#"]').forEach(a => {

a.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
        behavior:"smooth"
    });

});

});