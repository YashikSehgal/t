const menuBtn = document.getElementById("menuButton"); // Assuming the ID exists
const closeBtn = document.getElementById("closeButton"); // Assuming the ID exists
const topNavMob = document.querySelector(".topnav-links-mobile"); // Assuming this is the class name

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

function openMenu(){
  topNavMob.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
}


function closeMenu(){
    topNavMob.style.display = "none";
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
  }



const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progressBar.value = scrolled;
});