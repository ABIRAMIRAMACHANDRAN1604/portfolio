 function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Example: simple alert on form submit
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
});
// ----------------------------
// Smooth Scroll for Navbar Links
// ----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ----------------------------
// Typing Effect for Hero Section
// ----------------------------
const typedText = document.querySelector(".typed-text");
const textArray = ["Web Developer", "Frontend Designer", "Tech Enthusiast"];
let arrayIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[arrayIndex].length) {
    typedText.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    arrayIndex++;
    if (arrayIndex >= textArray.length) arrayIndex = 0;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typedText) typeEffect();
});