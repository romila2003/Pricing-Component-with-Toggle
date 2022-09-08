const circle = document.querySelector(".circle");
const price = document.querySelectorAll(".price-change");
const bg = document.getElementById("toggle");

circle.addEventListener("click", () => {
    circle.classList.toggle("toggleBtn");
    bg.classList.toggle("bg");
    
    for(let i = 0; i < price.length; i++) {
        price[i].classList.toggle("priceToggle");
    }
})