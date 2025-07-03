document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navbar.classList.add('hide-nav');
    } else {
      navbar.classList.remove('hide-nav');
    }

    lastScrollY = currentScrollY;
  });
});


const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

reveals.forEach(reveal => observer.observe(reveal));