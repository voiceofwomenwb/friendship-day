const button = document.getElementById("startBtn");
const lines = document.querySelectorAll(".line");
const names = document.querySelector(".names");
const music = document.getElementById("bgMusic");

button.addEventListener("click", () => {

    button.style.display = "none";

    // Play music
    music.play().catch(() => {});

    let delay = 0;

    lines.forEach((line) => {

        setTimeout(() => {
            line.classList.add("show");
        }, delay);

        delay += 3000;

    });

    setTimeout(() => {
        names.classList.add("show");
    }, delay);

});