document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear el botón y asignarle estilos y clases
    const navButton = document.createElement('button');
    navButton.classList.add('floating-nav-button');
    
    // Obtener la URL actual de la página
    const currentPage = window.location.pathname;

    // 2. Determinar si estamos en el Manual.html
    if (currentPage.includes('Manual.html')) {
        // Estamos en la página del Manual, el botón debe ser una flecha para salir.
        navButton.innerHTML = '⬅️'; // Flecha hacia la izquierda
        navButton.onclick = () => {
            // Regresa a la página de inicio (Index.html)
            window.location.href = 'Index.html';
        };
        // Estilo específico para el botón de salida (opcional: hacerlo más visible)
        navButton.style.backgroundColor = '#d32f2f'; // Rojo para salir
        navButton.style.color = '#ffffff';
    } else {
        // Estamos en cualquier otra página, el botón debe ser un libro para ir al manual.
        navButton.innerHTML = '📖'; // Emoji de libro
        navButton.onclick = () => {
            // Va a la página del Manual.html
            window.location.href = 'Manual.html';
        };
    }

    // 3. Añadir el botón al cuerpo del documento
    document.body.appendChild(navButton);
});
