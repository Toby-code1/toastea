const revealItems = document.querySelectorAll('.section, .intro-strip, footer');
revealItems.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

revealItems.forEach(el => observer.observe(el));

document.querySelectorAll('[data-float]').forEach(card => {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    card.style.transform = `translate(${x}px, ${y}px)`;
  });
});
