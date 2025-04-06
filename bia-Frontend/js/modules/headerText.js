export function headerText() {
  gsap.from(".sub-header h1", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    delay: 0.5,
  });
  gsap.from(".sub-header p", { opacity: 0, y: 50, duration: 1.5, delay: 1 });
}
