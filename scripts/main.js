// Initialize Lucide Icons
lucide.createIcons();

// Sticky Header Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Reveal Animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false // Animation only once
});

sr.reveal('.hero-content h1', { delay: 300 });
sr.reveal('.hero-content .lead', { delay: 400 });
sr.reveal('.hero-content .hero-actions', { delay: 500 });
sr.reveal('.tech-item', { interval: 100 });
sr.reveal('.workflow-card', { interval: 200 });
sr.reveal('.project-card', { interval: 200 });
sr.reveal('.about-text', { origin: 'left' });
sr.reveal('.about-image', { origin: 'right' });
sr.reveal('.cta-box');

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
