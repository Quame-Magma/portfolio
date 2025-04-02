# AKA Portfolio Website

This repository contains the source code for my personal portfolio website. The website showcases my skills, experience, projects, and contact information.
You can preview the website on https://arnoldkwame.netlify.app

![Arnold Kwame Anyor Portfolio](./Assets/images/aka.PNG)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Structure](#structure)
- [Installation](#installation)
- [Usage](#usage)
- [JavaScript Functionality](#javascript-functionality)
- [Responsiveness](#responsiveness)
- [Contact](#contact)
- [License](#license)

## Overview

This portfolio website is designed to showcase my professional experience, skills, projects, and provide a way for potential clients or employers to get in touch. The design is clean, modern, and responsive, ensuring a great user experience across all devices.

## Features

- **Responsive Design**: Adapts to various screen sizes from mobile to desktop
- **Sticky Navigation**: Navigation bar becomes sticky on scroll
- **Mobile Menu**: Hamburger menu for mobile devices
- **Skills Showcase**: Visual representation of technical skills
- **Experience Timeline**: Chronological display of work experience
- **Project Gallery**: Showcase of completed projects with links
- **Contact Form**: Direct way for visitors to get in touch
- **Social Media Links**: Links to professional profiles
- **Resume Download**: Option to download resume

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Custom Fonts (Almarena, Euclid)
- Responsive Design Techniques
- Media Queries

## Structure

The website is structured into the following sections:

1. **Header**: Navigation menu and logo
2. **Banner**: Introduction and social media links
3. **Skills**: Technical skills display
4. **Experience**: Work history and responsibilities
5. **About Me**: Personal information and downloadable resume
6. **Projects**: Portfolio of completed projects
7. **Contact**: Contact form and additional contact information
8. **Footer**: Copyright information

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Quame-Magma/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd aka-portfolio
   ```
3. Open `index.html` in your preferred browser.

## Usage

To customize this portfolio for your own use:

1. Replace the content in `index.html` with your personal information
2. Update the styles in `style.css` to match your preferred color scheme
3. Replace images in the `Assets/images` directory with your own
4. Update links to point to your social media profiles and projects
5. Modify the JavaScript files as needed

## JavaScript Functionality

The website includes two main JavaScript files:

### 1. Sticky Navigation

```javascript
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
```

### 2. Mobile Menu Toggle

```javascript
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
```

## Responsiveness

The website is fully responsive with breakpoints at:

- 1200px (Large screens)
- 992px (Medium screens)
- 768px (Tablets)
- 480px (Mobile phones)

Each breakpoint includes specific adjustments to ensure optimal display across all devices.

## Contact

For any questions or inquiries about this project, please contact:

- **Email**: anoldanyor@gmail.com
- **Phone**: +233542422679
- **LinkedIn**: [Arnold Kwame Anyor](https://linkedin.com/in/arnold-kwame-anyor-791351182)
- **GitHub**: [Quame-Magma](https://github.com/Quame-Magma)

## License

This project is open source and available under the [MIT License](LICENSE).
