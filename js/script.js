let burgerIcon = document.querySelector(".burger-icon");
let span = document.querySelectorAll(".burger-icon span");
let navLinks = document.querySelector("#navlinks");
let links = document.querySelectorAll("#navlinks a");
let overlay = document.querySelector(".overlay");

burgerIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    overlay.classList.toggle("black");

    span.forEach((span) => {
        span.classList.toggle("open");
    });
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");

        overlay.classList.remove("black");

        span.forEach((span) => {
            span.classList.remove("open");
        });
    });
});

window.onscroll = function () {
    if (scrollY > 100) {
        navLinks.classList.remove("show");

        overlay.classList.remove("black");

        span.forEach((span) => {
            span.classList.remove("open");
        });
    }
}