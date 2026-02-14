// script.js
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const slideInterval = 7000; // 7 seconds per slide

function nextSlide() {
    // Remove active class from current slide
    slides[currentIndex].classList.remove('active');
    
    // Move to next index (loop back to 0 if at the end)
    currentIndex = (currentIndex + 1) % slides.length;
    
    // Add active class to new slide
    slides[currentIndex].classList.add('active');
}

// Start the loop
setInterval(nextSlide, slideInterval);