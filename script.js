document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector(".header-section");
  
  // Define the sticky class position threshold
  const sticky = header.offsetTop;
  
  // Function to add the sticky class when you reach its scroll position
  function makeNavbarSticky() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      header.classList.add("scrolled");
    } else {
      header.classList.remove("sticky");
      header.classList.remove("scrolled");
    }
  }
  
  // Add the event listener for scroll
  window.addEventListener("scroll", makeNavbarSticky);
});


document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const body = document.body;
    
    logo.addEventListener('click', function(e) {
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