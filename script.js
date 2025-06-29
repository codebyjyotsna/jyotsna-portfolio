// Optional interactivity can go here
console.log("Welcome to Jyotsna's Portfolio!");

// 🌀 Hide loader on window load
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';

  // 🔥 Reveal hero section with animation
  document.querySelector('.hero').classList.add('visible');

  // ✨ Trigger scroll-based reveals after initial load
  revealOnScroll();
});

// 🌗 Light/Dark Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// 🚀 Fade-in Scroll Reveal
const fadeSections = document.querySelectorAll('.fade-in-section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

