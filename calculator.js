const calculatorButton = document.querySelector(".project1");
const calculatorPopup = document.querySelector(".calculatorSection");
const closeCalculatorButton = document.getElementById("closeCalculator");

calculatorButton.addEventListener("click", viewCalculator);

function viewCalculator(){
    calculatorPopup.style.display = "flex";
}




closeCalculatorButton.addEventListener("click", closeCalculatorPopup);

function closeCalculatorPopup(){
    calculatorPopup.style.display = "none";
}