const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const scrBtn = document.querySelector(".scrBtn");

burger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    console.log("click");
});

scrBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});