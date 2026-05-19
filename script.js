const alertBtn = document.getElementById('alertBtn');
const promoBanner = document.getElementById('promoBanner');

alertBtn.addEventListener('click', () => {
    // Acción para ocultar el banner de alertas de forma definitiva
    promoBanner.remove();
    alertBtn.disabled = true;
    alertBtn.innerText = "Alertas Desactivadas";
});