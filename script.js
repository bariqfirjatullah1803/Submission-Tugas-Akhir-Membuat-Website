const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault(); // Menghentikan navigasi ke link
        const dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.classList.toggle('show');
    });
});

// Menutup dropdown saat di luar area dropdown
window.addEventListener('click', (e) => {
    dropdownToggles.forEach(toggle => {
        const dropdownMenu = toggle.nextElementSibling;
        if (!toggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
