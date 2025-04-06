export function aboutAnimation() {
  gsap.from(".project-background", {
    scrollTrigger: {
      trigger: ".project-background",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });

  gsap.from(".mission-vision .mission", {
    scrollTrigger: {
      trigger: ".mission-vision",
      start: "top 80%",
    },
    opacity: 0,
    x: -50,
    duration: 1,
  });

  gsap.from(".mission-vision .vision", {
    scrollTrigger: {
      trigger: ".mission-vision",
      start: "top 80%",
    },
    opacity: 0,
    x: 50,
    duration: 1,
  });

  gsap.from(".phases .phase", {
    scrollTrigger: {
      trigger: ".phases",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from(".purpose ul li", {
    scrollTrigger: {
      trigger: ".purpose",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
  });

  gsap.from(".location", {
    scrollTrigger: {
      trigger: ".location",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
}
