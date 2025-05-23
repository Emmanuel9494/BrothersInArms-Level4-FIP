export function historyAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".timeline-item", {
    scrollTrigger: {
      trigger: ".conflict-history",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from(".event-card", {
    scrollTrigger: {
      trigger: ".key-events",
      start: "top 80%",
    },
    opacity: 0,
    x: -50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from(".story", {
    scrollTrigger: {
      trigger: ".featured-stories",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from(".letter-card", {
    scrollTrigger: {
      trigger: ".soldier-letters",
      start: "top 80%",
    },
    opacity: 0,
    x: 50,
    stagger: 0.3,
    duration: 1,
  });
}
