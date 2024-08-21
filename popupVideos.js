const allVideosPopups = document.querySelectorAll(".videoContainer video");
const popupVideoSection = document.querySelector(".popup-video1");

allVideosPopups.forEach(e => {
  e.addEventListener("click", displayPopup);
});

function displayPopup() {
  popupVideoSection.style.display = "block";
}


const popupVideoCloseButton = document.getElementById("popupVideoCloseButton");

popupVideoCloseButton.addEventListener("click", popupVideoClose);

function popupVideoClose(){
    popupVideoSection.style.display = "none";
}






