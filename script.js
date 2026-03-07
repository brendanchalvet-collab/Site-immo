// script.js

// Carousel Navigation Functionality
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    document.querySelector('.carousel-next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.querySelector('.carousel-prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
}

// Form Validation Functionality
function validateForm() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Clear previous error messages
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());

        // Validate each input
        form.querySelectorAll('input, textarea').forEach((input) => {
            if (!input.value.trim()) {
                isValid = false;
                const errorMessage = document.createElement('span');
                errorMessage.className = 'error-message';
                errorMessage.innerText = 'This field is required.';
                input.parentNode.insertBefore(errorMessage, input.nextSibling);
            }
        });

        if (!isValid) {
            event.preventDefault();
        }
    });
}

// Initialize interactive features
function initInteractiveFeatures() {
    initCarousel();
    validateForm();
}

// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initInteractiveFeatures);