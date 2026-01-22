// animations.js

// HERO SECTION
gsap.from(".hero-title", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-content p", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.from(".custom-contact-btn", {
  scale: 0.8,
  opacity: 0,
  duration: 0.5,
  delay: 0.6
});

gsap.from(".brother-image", {
  scale: 0,
  duration: 1,
  ease: "back.out(1.7)",
  delay: 0.8
});

// SECTIONS FADE IN
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%"
    },
    y: 40,
    opacity: 0,
    duration: 1
  });
});
