const overlay = document.getElementById('overlay');
const overlayBtn = document.getElementById('overlay-btn');

overlayBtn.addEventListener('click', () => {
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = 0;
});