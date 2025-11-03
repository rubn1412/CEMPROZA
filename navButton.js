document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear el botón y asignarle estilos y clases
    const navButton = document.createElement('button');
    navButton.classList.add('floating-nav-button');
    // Obtener la URL actual de la página
    const currentPage = window.location.pathname;
        navButton.onclick = () => {
            // Va a la página del Manual.html
            window.location.href = 'Manual.html';
        };

    document.body.appendChild(navButton);
});
