document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navList = document.querySelector('#main-menu');

    if (toggleButton && navList) {
        toggleButton.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});
