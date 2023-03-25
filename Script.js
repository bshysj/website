// Declare variables
const homeSection = document.querySelector('#home');
const productSection = document.querySelector('#product');
const aboutSection = document.querySelector('#about');

// Smooth scroll to sections
function smoothScroll(targetSection) {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: targetSection.offsetTop
  });
}

// Scroll to home section when logo is clicked
const logo = document.querySelector('.zlogo.png.jpeg');
logo.addEventListener('click', function() {
  smoothScroll(homeSection);
});

// Scroll to sections when nav links are clicked
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSectionId = this.getAttribute('href').slice(1);
    const targetSection = document.querySelector(`#${targetSectionId}`);
    smoothScroll(targetSection);
  });
});

// Toggle mobile menu
const mobileMenuIcon = document.querySelector('.fas.fa-bars');
const mobileMenu = document.querySelector('nav ul');
mobileMenuIcon.addEventListener('click', function() {
  mobileMenu.classList.toggle('show');
});
