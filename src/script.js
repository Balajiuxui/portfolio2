document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  let lastScrollY = window.scrollY;

  // Toggle mobile menu
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Handle scroll for desktop only
  function handleScroll() {
    const isDesktop = window.innerWidth > 768;
    const currentScrollY = window.scrollY;

    if (isDesktop) {
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.classList.add('hide-nav');
      } else {
        navbar.classList.remove('hide-nav');
      }
    } else {
      navbar.classList.remove('hide-nav'); // Force show on mobile
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);

  // ScrollReveal and GSAP (only on desktop)
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

    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });
  }
});
