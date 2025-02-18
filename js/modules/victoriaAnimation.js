export function victoriaAnimation() {
  // GSAP Animations for Victoria Crosses Page
  gsap.registerPlugin(ScrollTrigger);

  // Animate header content
  gsap.from(".header-content h1", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
  });

  gsap.from(".header-content p", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out",
  });

  // Animate sections on scroll
  gsap.utils
    .toArray(
      ".crosses-london, .canadian-recipients, .indian-recipients, .hero-of-haifa"
    )
    .forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

  // Animate images
  gsap.from(".vc-image, .haifa-img", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".vc-image, .haifa-img",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
}
