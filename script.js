// Función para desplegar/contraer los pasos
function toggleStep(element) {
    element.classList.toggle('active');
}

// Opcional: Desplazar la vista al hacer clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
