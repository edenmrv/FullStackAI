document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Toggle menu open/close on mobile
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });

    // Close the menu automatically when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('open');
        });
    });
});