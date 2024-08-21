const bannerImg = document.querySelectorAll(".main-banner img");


let i=0;

const nextBanner = function(){

bannerImg[i].style.display = "none";
    i++;

if(i === bannerImg.length){
       i=0;
}

    bannerImg[i].style.display = "block";

}



const prevBanner = function(){

    bannerImg[i].style.display = "none";
        i--;
    
        if (i < 0) {
            
            i = bannerImg.length - 1;
        }
    
        bannerImg[i].style.display = "block";
    
    }

setInterval(nextBanner, 2000);


const prevBtn = document.getElementById("leftButton");
const nextBtn = document.getElementById("rightButton");

prevBtn.addEventListener("click", prevBanner);
nextBtn.addEventListener("click", nextBanner);
