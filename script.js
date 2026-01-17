// Typing Animation
const texts = [
    "AI Enthusiast",
    "Software Developer",
    "Machine Learning Engineer",

];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const current = texts[textIndex];
    const typingElement = document.querySelector('.typing');
    
    // Make sure the element exists before trying to update it
    if (!typingElement) return;
    
    if (!isDeleting) {
        typingElement.textContent = current.slice(0, charIndex);
        charIndex++;
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        typingElement.textContent = current.slice(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
            isDeleting = false;
            charIndex = 0;
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

// Start typing animation when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        typingElement.textContent = ''; // Clear any initial text
        typingElement.classList.add('active'); // Make it visible
        setTimeout(type, 100); // Small delay before starting
    }
});

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

