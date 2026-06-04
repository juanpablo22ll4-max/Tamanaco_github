console.log("JS cargó");

// Mostrar / ocultar descripción del show
let toggleBtn = document.getElementById("toggleBtn");
let showText = document.getElementById("showText");

if (toggleBtn && showText) {
    toggleBtn.addEventListener("click", function () {

        if (showText.style.display === "block") {
            showText.style.display = "none";
        } else {
            showText.style.display = "block";
        }

    });
}

// Reservar con WhatsApp
let reservarBtn = document.getElementById("reservarBtn");
let fecha = document.getElementById("fecha");

if (reservarBtn && fecha) {

    reservarBtn.addEventListener("click", function () {

        if (!fecha.value) {
            alert("Selecciona una fecha primero");
            return;
        }

        let mensaje = "Hola, quiero reservar Tamanaco Tambor para la fecha: " + fecha.value;

        let url = "https://wa.me/16308194414?text=" + encodeURIComponent(mensaje);

        window.open(url, "_blank");

    });

}

document.addEventListener("DOMContentLoaded", function () {
  const inputFecha = document.getElementById("fecha");

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const yyyy = hoy.getFullYear();
  const mm = String(hoy.getMonth() + 1).padStart(2, "0");
  const dd = String(hoy.getDate()).padStart(2, "0");

  const fechaMin = `${yyyy}-${mm}-${dd}`;

  inputFecha.min = fechaMin;
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