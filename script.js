document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const carousel = document.querySelector(".carousel");
  const list = document.querySelector(".list");
  const runningTime = document.querySelector(".carousel .timeRunning");

  let timeRunning = 3000;
  let timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto;

  // Hamburger menu toggle
  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // Carousel button event listeners
  nextBtn.onclick = () => showSlider("next");
  prevBtn.onclick = () => showSlider("prev");

  // Function to reset the running time animation
  function resetTimeAnimation() {
    runningTime.style.animation = "none";
    void runningTime.offsetHeight; // trigger reflow
    runningTime.style.animation = "runningTime 7s linear 1 forwards";
  }

  // Function to show the slider
  function showSlider(type) {
    const sliderItemsDom = list.querySelectorAll(".item");
    if (type === "next") {
      list.appendChild(sliderItemsDom[0]);
      carousel.classList.add("next");
    } else {
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carousel.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carousel.classList.remove("next", "prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation(); // Reset the running time animation
  }

  // Start the initial animation
  resetTimeAnimation();

  // Slideshow functionality
});
