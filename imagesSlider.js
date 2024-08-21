let scrollContainer = document.querySelector(".gallery");
let backBtnSlider = document.getElementById("backBtnSlider");
let nextBtnSlider = document.getElementById("nextBtnSlider");


scrollContainer.addEventListener("wheel", wheelFunction);

function wheelFunction(e){
  console.log("wheel event triggered");
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY; 
}

nextBtnSlider.addEventListener("click", nextSection);

function nextSection(e){
  console.log("nextSection event triggered");
  const galleryWidth = scrollContainer.offsetWidth;
  const scrollAmount = galleryWidth / 3;
  scrollContainer.scrollLeft += scrollAmount;
}

backBtnSlider.addEventListener("click", backSection);

function backSection(e){
  console.log("backSection event triggered");
  const galleryWidth = scrollContainer.offsetWidth;
  const scrollAmount = galleryWidth / 3;
  scrollContainer.scrollLeft -= scrollAmount;
}

/*for Moible Scroller*/

let scrollContainerMobile = document.querySelector(".imageSectionMobile");
let backBtnSliderMobile = document.getElementById("backBtnSliderMobile");
let nextBtnSliderMobile = document.getElementById("nextBtnSliderMobile");

console.log("scrollContainerMobile:", scrollContainerMobile);
console.log("backBtnSliderMobile:", backBtnSliderMobile);
console.log("nextBtnSliderMobile:", nextBtnSliderMobile);

scrollContainerMobile.addEventListener("wheel", wheelFunctionMobile);

function wheelFunctionMobile(e){
  console.log("wheel event triggered (mobile)");
  e.preventDefault();
  scrollContainerMobile.scrollLeft += e.deltaY; 
}

nextBtnSliderMobile.addEventListener("click", nextSectionMobile);

function nextSectionMobile(e){
  console.log("nextSection event triggered (mobile)");
  const galleryWidthMobile = scrollContainerMobile.offsetWidth;
  const scrollAmountMobile = galleryWidthMobile; 
  scrollContainerMobile.scrollLeft += scrollAmountMobile;
}

backBtnSliderMobile.addEventListener("click", backSectionMobile);

function backSectionMobile(e){
  console.log("backSection event triggered (mobile)");
  const galleryWidthMobile = scrollContainerMobile.offsetWidth;
  const scrollAmountMobile = galleryWidthMobile; 
  scrollContainerMobile.scrollLeft -= scrollAmountMobile;
}