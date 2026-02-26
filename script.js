// ====== ELEMENTS ======
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('bgMusic');

// ====== SLIDER CONFIG ======
let currentIndex = 0;
const slideInterval = 7000; // 7 seconds

function nextSlide() {
    if (!slides.length) return;

    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(nextSlide, slideInterval);


// ====== MUSIC START ON FIRST HUMAN ACTION ======

function startMusicOnce() {
    if (!music) return;

    const playPromise = music.play();

    // Prevent uncaught errors in strict browsers
    if (playPromise !== undefined) {
        playPromise.catch(() => {});
    }

    removeInteractionListeners();
}

function removeInteractionListeners() {
    interactionEvents.forEach(event =>
        document.removeEventListener(event, startMusicOnce)
    );
}

// Events that count as "the user is alive"
const interactionEvents = [
    'click',
    'scroll',
    'keydown',
    'touchstart',
    'pointerdown'
];

interactionEvents.forEach(event =>
    document.addEventListener(event, startMusicOnce, { once: true })
);
