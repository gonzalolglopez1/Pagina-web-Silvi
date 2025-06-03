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

 document.querySelectorAll(".carousel-contenedor").forEach(carousel => {
  const track = carousel.querySelector(".carousel-pistas");
  const items = carousel.querySelectorAll(".carousel-pista");
  const prevBtn = carousel.querySelector(".carousel-boton.left");
  const nextBtn = carousel.querySelector(".carousel-boton.right");
  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);
  }

  // Auto-slide control
  let autoSlide = setInterval(showNext, 5000);

  // Pausar en hover o touch sobre los videos
  const videos = carousel.querySelectorAll("video");
  videos.forEach(video => {
    // Para escritorio
    video.addEventListener("mouseenter", () => clearInterval(autoSlide));
    video.addEventListener("mouseleave", () => {
      autoSlide = setInterval(showNext, 5000);
    });

    // Para dispositivos móviles
    video.addEventListener("touchstart", () => clearInterval(autoSlide), { passive: true });
    video.addEventListener("touchend", () => {
      autoSlide = setInterval(showNext, 5000);
    }, { passive: true });
  });
});

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
});


const video = document.getElementById("miVideo");
    let contadorRepeticiones = 0;
    const maxRepeticiones = 10;

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




