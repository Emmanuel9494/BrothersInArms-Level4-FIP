export function donors() {
  // GSAP Animations for Donors Page
  console.log("donors animation is called");

  gsap.from(".donors-intro", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
  });

  gsap.from(".donors-table", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".donors-table",
      start: "top 80%",
    },
  });

  gsap.from(".why-donate .reason", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".why-donate",
      start: "top 80%",
    },
  });

  gsap.from(".donor-recognition .level", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".donor-recognition",
      start: "top 80%",
    },
  });
}
