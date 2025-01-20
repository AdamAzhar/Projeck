document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  var nextBtn = document.querySelector(".next"),
    prevBtn = document.querySelector(".prev"),
    carousel = document.querySelector(".carousel"),
    list = document.querySelector(".list"),
    item = document.querySelectorAll(".item"),
    runningTime = document.querySelector(".carousel .timeRunning");

  let timeRunning = 3000;
  let timeAutoNext = 7000;

  nextBtn.onclick = function () {
    showSlider("next");
  };

  prevBtn.onclick = function () {
    showSlider("prev");
  };

  let runTimeOut;

  let runNextAuto = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);

  function resetTimeAnimation() {
    runningTime.style.animation = "none";
    runningTime.offsetHeight; // trigger reflow
    runningTime.style.animation = null;
    runningTime.style.animation = "runningTime 7s linear 1 forwards";
  }

  function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll(".carousel .list .item");
    if (type === "next") {
      list.appendChild(sliderItemsDom[0]);
      carousel.classList.add("next");
    } else {
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carousel.classList.add("prev");
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() => {
      carousel.classList.remove("next");
      carousel.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation(); // Reset the running time animation
  }

  // Start the initial animation
  resetTimeAnimation();
});

document.addEventListener("DOMContentLoaded", function () {
  const nextBtn = document.querySelector(".food-next"),
    prevBtn = document.querySelector(".food-prev"),
    foodCarousel = document.querySelector(".food-carousel"),
    foodList = document.querySelector(".food-list"),
    foodItems = document.querySelectorAll(".food-item"),
    foodRunningTime = document.querySelector(".food-timeRunning");

  let currentIndex = 0;
  const totalItems = foodItems.length;
  const timeAutoNext = 7000;

  function showSlider(index) {
    foodList.style.transform = `translateX(-${index * 100}%)`;
    resetTimeAnimation();
  }

  nextBtn.onclick = function () {
    currentIndex = (currentIndex + 1) % totalItems; // Loop kembali ke awal
    showSlider(currentIndex);
  };

  prevBtn.onclick = function () {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop kembali ke akhir
    showSlider(currentIndex);
  };

  function resetTimeAnimation() {
    foodRunningTime.style.animation = "none";
    foodRunningTime.offsetHeight; // trigger reflow
    foodRunningTime.style.animation = null;
    foodRunningTime.style.animation = "runningTime 7s linear 1 forwards";
  }

  // Auto next
  setInterval(() => {
    nextBtn.click();
  }, timeAutoNext);

  // Start the initial animation
  showSlider(currentIndex);
});
