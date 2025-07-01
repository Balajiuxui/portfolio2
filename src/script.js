let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  window.requestAnimationFrame(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      navbar.classList.add('hide-nav');  // scroll down = hide
    } else {
      navbar.classList.remove('hide-nav'); // scroll up = show
    }
    lastScrollY = window.scrollY;
  });
});