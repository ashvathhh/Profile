// Typing Animation
const texts = [
    "AI Enthusiast",
    "Software Developer",
    "Machine Learning Engineer",
    "App Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const current = texts[textIndex];
    const typingElement = document.querySelector('.typing');
    
    if (!isDeleting) {
        typingElement.textContent = current.slice(0, charIndex++);
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        typingElement.textContent = current.slice(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Start typing animation when page loads
window.addEventListener('load', type);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});