// Selecciona el ícono de hamburguesa y el menú
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('nav ul');

// Alterna la visibilidad del menú cuando se hace clic en el ícono
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});