// Typing animation text
const texts = [
    "AI Enthusiast",
    "Software Developer",
    "Machine Learning Engineer",
    "App Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = texts[index];

    if (!isDeleting) {
        document.querySelector(".typing").textContent = currentText.slice(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        document.querySelector(".typing").textContent = currentText.slice(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    }

    setTimeout(type, isDeleting ? 60 : 90);
}

window.onload = type;
