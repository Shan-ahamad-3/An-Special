const slides = document.querySelectorAll('.slide');
const music = document.getElementById('bgMusic');
let currentIndex = 0;
const slideInterval = 7000; // Changes photo every 7 seconds

// 1. Photo Slider Logic
function nextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(nextSlide, slideInterval);

// 2. Music Autoplay Logic
function startMusic() {
    music.play().catch(() => {
        console.log("Waiting for user interaction to play music...");
    });
}

// Try playing on load
window.addEventListener('load', startMusic);

// Fallback: Start music on the first click anywhere on the page
document.addEventListener('click', () => {
    startMusic();
}, { once: true });
