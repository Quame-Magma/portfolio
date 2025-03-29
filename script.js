document.addEventListener('DOMContentLoaded', function() {
    // Use the logo as the toggle for mobile navigation
    const logo = document.querySelector('.logo');
    const body = document.body;
    
    logo.addEventListener('click', function(e) {
        // Only trigger on smaller screens and when clicking the pseudo-element (hamburger)
        if (window.innerWidth <= 992 && e.clientX > this.getBoundingClientRect().right - 50) {
            body.classList.toggle('nav-active');
            e.preventDefault();
        }
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.menu-links ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                body.classList.remove('nav-active');
            }
        });
    });
    
    // Change header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header-section');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
});