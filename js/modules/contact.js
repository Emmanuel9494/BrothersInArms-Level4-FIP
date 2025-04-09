export function contact() {
  gsap.from(".contact-info", {
    duration: 1,
    opacity: 0,
    x: -50,
    ease: "power2.out",
    delay: 0.5,
  });

  gsap.from(".contact-form", {
    duration: 1,
    opacity: 0,
    x: 50,
    ease: "power2.out",
    delay: 0.8,
  });

  // Form Submission
  document
    .querySelector("#contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for reaching out! We will get back to you soon.");
      this.reset();
    });
}
