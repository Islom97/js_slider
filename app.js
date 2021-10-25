const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const conteiner = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const mainSlideCount= mainSlide.querySelectorAll("div").length

sidebar.style.top = `-${(mainSlideCount - 1) * 100}vh`;
let activeIndexSlide = 0

upBtn.addEventListener("click", () => {
   chengeSlider("up");
});
downBtn.addEventListener("click", () => {
   chengeSlider("down");
});

function chengeSlider(param) {
   if (param === "up") {
      activeIndexSlide++
      if (activeIndexSlide === mainSlideCount) {
         activeIndexSlide = 0
      }
   }else if (param === "down"){
      activeIndexSlide--
      if (activeIndexSlide < 0) {
         activeIndexSlide = mainSlideCount -1;
      }
   }

   const height = conteiner.clientHeight

   mainSlide.style.transform = `translateY(-${(activeIndexSlide * height)}px )`
   sidebar.style.transform = `translateY(${(activeIndexSlide * height)}px )`

}