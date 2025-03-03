// // Selecciona el ícono de hamburguesa y el menú
// const hamburger = document.getElementById('hamburger');
// const menu = document.querySelector('.nav .ul');

// // Alterna la visibilidad del menú cuando se hace clic en el ícono
// hamburger.addEventListener('click', () => {
//     menu.classList.toggle('active');
// });
document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse, {
          toggle: true
        });
      }
    });
  });
});


const video = document.getElementById("miVideo");
    let contadorRepeticiones = 0;
    const maxRepeticiones = 5;

    video.addEventListener("ended", () => {
        contadorRepeticiones++;
        if (contadorRepeticiones >= maxRepeticiones) {
            video.loop = false; // Detiene el loop
            video.pause(); // Pausa el video
            setTimeout(() => {
                contadorRepeticiones = 0; // Reinicia el contador
                video.loop = true; // Reactiva el loop
                video.currentTime = 0; // Reinicia el video
                video.play(); // Inicia nuevamente
            }, 5000); // Reinicia después de 5 segundos (ajusta el tiempo si es necesario)
        }
    });


const header = document.querySelector("header");
const nav = document.querySelector(".navbar")

// window.addEventListener("scroll", () => {
//     if (window.scrollY >= 0) {
//         header.style.padding = "0"; // Elimina el padding cuando se vuelve sticky
//         nav.style.padding = "0";
//     } else {
//         header.style.padding = "1.5rem"; // Restaura el padding cuando vuelve arriba
//     }
// });


const btnSubir = document.getElementById("btSubir");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnSubir.classList.add("mostrar");
    } else {
      btnSubir.classList.remove("mostrar");
    }
  });

  btnSubir.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Desplazamiento suave
    });
  });