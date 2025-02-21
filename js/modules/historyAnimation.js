export function historyAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // gsap.from(".history-header h1", {
  //   opacity: 0,
  //   y: -50,
  //   duration: 1.5,
  //   ease: "power3.out",
  // });

  // gsap.from(".history-header p", {
  //   opacity: 0,
  //   y: 50,
  //   duration: 1.5,
  //   delay: 0.5,
  //   ease: "power3.out",
  // });

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

  gsap.from(".story-card", {
    scrollTrigger: {
      trigger: ".personal-stories",
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
