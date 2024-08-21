const testimonials =[
    {
    name: "Yashik",
    photoUrl:
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
},


{
  name: "Rosetta Q",
  photoUrl:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
},


{
  name: "Constantine V",
  photoUrl:
    "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
},
];

const reviewerDP = document.getElementById("reviewerDP");
const reviewerName = document.getElementById("reviewerName");
const review = document.getElementById("review");

reviewerDP.src = testimonials[testimonials.length-1].photoUrl; 
reviewerName.innerHTML = testimonials[testimonials.length-1].name;
review.innerHTML = testimonials[testimonials.length-1].text;


let reviewsI = 0;

const nextReview = function(){

    reviewerDP.src = testimonials[reviewsI].photoUrl;
    reviewerName.innerHTML = testimonials[reviewsI].name;
    review.innerHTML = testimonials[reviewsI].text;

    reviewsI++;

    if(reviewsI === testimonials.length){
        reviewsI=0;
    }
 
}


const prevReview = function(){

    reviewerDP.src = testimonials[reviewsI].photoUrl;
    reviewerName.innerHTML = testimonials[reviewsI].name;
    review.innerHTML = testimonials[reviewsI].text;

    reviewsI--;

    if(reviewsI < 0){
        reviewsI = testimonials.length -1;
    }
 
}


setInterval(nextReview, 2000);

const reviewPrevBtn = document.getElementById("reviewPrev");
const reviewNextBtn = document.getElementById("reviewNext");

reviewPrevBtn.addEventListener("click", prevReview);
reviewNextBtn.addEventListener("click", nextReview);
