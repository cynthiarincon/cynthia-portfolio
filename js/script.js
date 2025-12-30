function toggleMenu(){
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector(".hamburger-icon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
};


// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from submitting
    
    // Hide the form
    contactForm.style.display = 'none';
    
    // Show success message
    successMessage.style.display = 'block';
});