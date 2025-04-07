export function menu() {
  const navLinks = document.querySelector("#navLinks");

  // Attach the functions to the window object
  window.showMenu = function () {
    navLinks.style.right = "0";
  };

  window.hideMenu = function () {
    navLinks.style.right = "-200px";
  };
}
