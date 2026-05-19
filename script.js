const alertBtn = document.getElementById('alertBtn');
const promoBanner = document.getElementById('promoBanner');

alertBtn.addEventListener('click', () => {
    // Acción para ocultar el banner de alertas
    promoBanner.style.display = 'none';
});