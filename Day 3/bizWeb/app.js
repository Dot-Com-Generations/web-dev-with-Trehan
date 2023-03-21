const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    console.log("click");
});

document.addEventListener("mouseup", (e) => {
    if (!navbar.contains(e.target) && navbar.classList.contains("open")) {
        navbar.classList.toggle("open");
    }
});
