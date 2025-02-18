export function stories() {
  document.addEventListener("DOMContentLoaded", function () {
    const stories = document.querySelectorAll(".story");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    stories.forEach((story) => {
      story.addEventListener("click", function () {
        const content = `
              <div class="lightbox-content">
                <span class="close">&times;</span>
                <h2>${this.querySelector("h2").innerHTML}</h2>
                <h3>${this.querySelector("h3").innerHTML}</h3>
                <img src="${this.querySelector("img").src}" alt="${
          this.querySelector("img").alt
        }">
                <p>${this.querySelector("p").innerHTML}</p>
              </div>
            `;
        lightbox.innerHTML = content;
        lightbox.style.display = "flex";

        lightbox.querySelector(".close").addEventListener("click", function () {
          lightbox.style.display = "none";
        });
      });
    });

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  });
}
