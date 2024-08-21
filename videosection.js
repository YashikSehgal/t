const viewMoreVideosButton = document.getElementById("viewMoreVideos");
const hiddenVideos = document.querySelector(".videoSection2");

viewMoreVideosButton.addEventListener("click", toggleHiddenVideos); 

var isVisible = false;  /*at starting*/

function toggleHiddenVideos() {
        hiddenVideos.classList.toggle("visible");  
                isVisible = !isVisible;

  if (isVisible) {
    viewMoreVideosButton.innerHTML = "View Less";
  } else {
    viewMoreVideosButton.innerHTML = "View More";
  }
  
}



