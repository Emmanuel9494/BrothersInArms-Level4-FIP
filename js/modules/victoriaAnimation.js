export function victoriaAnimation() {
  // GSAP Animations for Victoria Crosses Page
  gsap.registerPlugin(ScrollTrigger);

  // Animate sections on scroll
  gsap.utils
    .toArray(".crosses-london, .canadian-recipients, .indian-recipients")
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

  // Animate recipient cards
  gsap.utils.toArray(".recipient-card").forEach((section, i) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section.closest("section"), // animate when parent section enters view
        start: "top 80%",
      },
      opacity: 0,
      x: 50,
      duration: 1,
      delay: i * 0.1,
    });
  });

  // Animate images
  gsap.from(".vc-image", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".vc-image",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
}
