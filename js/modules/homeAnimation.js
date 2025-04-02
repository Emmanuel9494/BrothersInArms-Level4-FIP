export function homeAnimation() {
  // homeAnimation.js
  gsap.registerPlugin(ScrollTrigger);

  // Hero section animations
  gsap.from(".header img, .nav-links", {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  });

  gsap.from(".text-box h1", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "elastic.out(1, 0.5)",
  });

  gsap.from(".text-box p, .text-box .donate-button", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 1,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Video section animation
  gsap.from("#video-section h2", {
    scrollTrigger: {
      trigger: "#video-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from("#player-container", {
    scrollTrigger: {
      trigger: "#player-container",
      start: "top 75%",
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Featured stories animations
  gsap.utils.toArray(".story").forEach((story, i) => {
    gsap.from(story, {
      scrollTrigger: {
        trigger: story,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.2,
      ease: "power2.out",
    });

    // Hover effect
    story.addEventListener("mouseenter", () => {
      gsap.to(story, {
        scale: 1.02,
        duration: 0.3,
      });
    });

    story.addEventListener("mouseleave", () => {
      gsap.to(story, {
        scale: 1,
        duration: 0.3,
      });
    });
  });

  // Blog cards animation
  gsap.utils.toArray(".blog-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.15,
      ease: "power2.out",
    });
  });

  // News cards animation
  gsap.utils.toArray(".news-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      x: i % 2 === 0 ? -30 : 30,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.15,
      ease: "power2.out",
    });
  });

  // CTA section animation
  gsap.from(".cta h1", {
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".cta .donate-button", {
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });

  // Footer animations
  gsap.from(".footer-section", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Read more arrow hover effects
  gsap.utils.toArray(".read-more i").forEach((arrow) => {
    arrow.addEventListener("mouseenter", () => {
      gsap.to(arrow, {
        x: 5,
        duration: 0.3,
      });
    });

    arrow.addEventListener("mouseleave", () => {
      gsap.to(arrow, {
        x: 0,
        duration: 0.3,
      });
    });
  });

  // Donate button pulse effect
  gsap.to(".donate-button", {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "power1.inOut",
  });
}
