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


if (window.innerWidth >= 1024) {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(reveal => observer.observe(reveal));
}


if (window.innerWidth >= 1024) {
  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray(".project-card");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".projects-container",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".projects-container").offsetWidth
    }
  });
}

// Refresh ScrollTrigger on resize (safe for future)
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});


const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  // Remove all existing active-link classes first
  link.classList.remove('active-link');

  // Skip download links
  if (link.hasAttribute('download')) return;

  // Add class if current link matches current path
  if (link.href.includes(currentPath)) {
    link.classList.add('active-link');
  }
});
