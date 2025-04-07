export function stories() {
  document.addEventListener("DOMContentLoaded", function () {
    const stories = document.querySelectorAll(".story");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    stories.forEach((story) => {
      story.addEventListener("click", function () {
        const content = `
              <div class="lightbox-content grid-con">
                <span class="close">&times;</span>
                <h3 class="col-span-full">${
                  this.querySelector("h3").innerHTML
                }</h3>
                <h5 class="col-span-full">${
                  this.querySelector("h5").innerHTML
                }</h5>
                <img src="${this.querySelector("img").src}" alt="${
          this.querySelector("img").alt
        }" class="col-span-2 m-col-span-6">
                <p class="col-span-2 m-col-span-6">${
                  this.querySelector("p").innerHTML
                }</p>
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
