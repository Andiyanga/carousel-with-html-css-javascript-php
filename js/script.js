let images = document.querySelectorAll(".slide");

let i = 1;

//Setting Background
images.forEach(function setBackground(slide) {
  slide.style.background = `url("./images/${i}.jpg")`;
  i++;
});

function myTest(element) {
  console.log(element);

  let el = element;

  console.log(el.id);
  let sliderImages = document.querySelectorAll(`#${el.id} .slider .slide`);

  let current = 0;
  let i = 1;

  //Setting Background
  sliderImages.forEach(function setBackground(slide) {
    slide.style.background = `url("./images/${i}.jpg")`;
    i++;
  });

  //Clear all images
  function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
  }

  //Init slider
  function startSlide() {
    reset();
    sliderImages[current].style.display = "block";
    sliderImages[current].style.backgroundSize = "cover";
    sliderImages[current].style.backgroundPosition = "center";
    sliderImages[current].style.backgroundRepeat = "no-repeat";
  }

  //show next
  function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    sliderImages[current + 1].style.backgroundSize = "cover";
    sliderImages[current + 1].style.backgroundPosition = "center";
    sliderImages[current + 1].style.backgroundRepeat = "no-repeat";
    current++;
  }

  startSlide();

  //Automatic Sliding
  setInterval(function () {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  }, 3000);
}
