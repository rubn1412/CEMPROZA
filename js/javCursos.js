// ===========================
// Render de tarjetas de cursos
// ===========================
function displayCourses(coursesToShow = []) {
  const courseGrid = document.querySelector('.course-grid');
  if (!courseGrid) return; // seguridad
  courseGrid.innerHTML = '';

  coursesToShow.forEach(course => {
    const courseCard = createCourseCard(course);
    courseGrid.appendChild(courseCard);
  });
}

// ===========================
// Paginación + Filtrado
// ===========================
const PAGE_SIZE = 9;

// Estado UI
let currentPage = 1;
let currentCategory = 'Todas las categorías';
const currentFilters = {}; // ej: { nivel:'Intermedio', horas:'<=48' }


// Devuelve lista filtrada según categoría + filtros
function getFilteredList() {
  const data = (typeof coursesData !== 'undefined' && Array.isArray(coursesData))
    ? coursesData
    : [];

  let list = data.slice();

  // Categoría
  if (currentCategory && currentCategory !== 'Todas las categorías') {
    list = list.filter(c => String(c.category).trim() === currentCategory);
  }
  return list;
}

// Render de una página
function renderPageFromState(page = 1, doScroll = false) {
  const list = getFilteredList();
  const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  currentPage = Math.min(Math.max(1, page), totalPages);

  const start = (currentPage - 1) * PAGE_SIZE;
  const slice = list.slice(start, start + PAGE_SIZE);

  displayCourses(slice);
  renderPagination(totalPages);

  if (doScroll) {
    const grid = document.querySelector('.categories');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ===========================
//           Paginacion
// ===========================
function renderPagination(totalPages) {
  const pag = document.querySelector('.pagination');
  if (!pag) return;
  pag.innerHTML = '';

  // Si solo hay una página, ocultar
  pag.style.display = totalPages <= 1 ? 'none' : '';

  const makeBtn = (label, page, disabled = false, active = false) => {
    const b = document.createElement('button');
    b.className = 'pagination-btn' + (active ? ' active' : '');
    b.textContent = label;
    b.disabled = disabled;
    if (!disabled && !active) {
      b.addEventListener('click', () => renderPageFromState(page, true));
    }
    return b;
  };

  // Botones de navegación
  pag.appendChild(makeBtn('«', 1, currentPage === 1));
  pag.appendChild(makeBtn('‹', currentPage - 1, currentPage === 1));

  // 🔹 Mostrar todos los números de página (sin “…”)
  for (let i = 1; i <= totalPages; i++) {
    pag.appendChild(makeBtn(String(i), i, false, i === currentPage));
  }

  // Botones siguiente / último
  pag.appendChild(makeBtn('›', currentPage + 1, currentPage === totalPages));
  pag.appendChild(makeBtn('»', totalPages, currentPage === totalPages));
}

// ===========================
// Init (único DOMContentLoaded)
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  // Categorías
  const categoryButtons = document.querySelectorAll('.category-btn');
  const preActiveCat = document.querySelector('.category-btn.active');
  if (preActiveCat) currentCategory = preActiveCat.textContent.trim();

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.textContent.trim();
      renderPageFromState(1,false);
    });
  });

  function readActiveFilters() {
  console.log("Leyendo filtros activos (no implementado aún).");
}
  // Filtros
  document.querySelectorAll('.filter-group .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.filter-group');
      parent?.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      readActiveFilters();
      renderPageFromState(1, true);
    });
  });

  // Render inicial
  readActiveFilters();
  renderPageFromState(1, false);
});

// ===========================
// Modal helpers
// ===========================
function openCourseModal(course) {
  const modal = document.getElementById('courseModal');
  if (!modal) return;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');

  const titleEl = modal.querySelector('.modal__title');
  const metaEl  = modal.querySelector('.modal__meta');
  if (titleEl) titleEl.textContent = course.title || '';
  if (metaEl)  metaEl.textContent  = `${course.category || ''} `;

  const descEl = modal.querySelector('.modal__description');
  if (descEl) descEl.innerHTML = course.content || `<p>${course.description || ''}</p>`;

  const sedesWrap = modal.querySelector('#modalSedes');
  if (sedesWrap) {
    sedesWrap.innerHTML = '';
    if (Array.isArray(course.sedes) && course.sedes.length) {
      course.sedes.slice(0, 3).forEach(s => {
        const a = document.createElement('a');
        a.href = s.href; a.target = ''; a.rel = 'noopener';
        a.innerHTML = `
          <img src="${s.img}" alt="${s.name}">
          <span>${s.name}</span>
        `;
        sedesWrap.appendChild(a);
      });
    } else {
      sedesWrap.innerHTML = '<p>No hay sedes configuradas para este curso.</p>';
    }
  }

  document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
  const modal = document.getElementById('courseModal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Cerrar modal con backdrop, botón o ESC
document.addEventListener('click', (e) => {
  if (e.target.matches('[data-close]')) closeCourseModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCourseModal();
});

// ===========================
// Delegación para botones "Más Información"
// ===========================
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.details-btn');
  if (!btn) return;

  const id = Number(btn.dataset.courseId);
  const data = (typeof coursesData !== 'undefined' && Array.isArray(coursesData))
    ? coursesData
    : [];

  const course = data.find(c => Number(c.id) === id);
  if (course) openCourseModal(course);
});
