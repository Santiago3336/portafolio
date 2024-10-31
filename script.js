const bg = document.getElementById('interactive-bg');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    bg.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 7%)`;
    bg.style.opacity = 0.3;
});

document.addEventListener('mouseleave', () => {
    bg.style.opacity = 0;
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block"; // Muestra el modal
    modalImg.src = src; // Establece la fuente de la imagen del modal
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Oculta el modal
}

