// Elements
const loader = document.getElementById("loader");
const hero = document.getElementById("hero");
const story = document.getElementById("story");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");
const scenes = document.querySelectorAll(".scene");

// Hide loader
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 1000);
});

// Start Story
startBtn.addEventListener("click", () => {

    hero.style.display = "none";
    story.style.display = "flex";

    if (music) {
        music.play().catch(() => {});
    }

    startStory();
    createHearts();

});

function startStory() {

    let current = 0;

    scenes.forEach(scene => scene.classList.remove("active"));
    scenes[current].classList.add("active");

    function changeScene() {

        let delay = (current === 3) ? 12000 : 5000;

        setTimeout(() => {

            scenes[current].classList.remove("active");
            current++;

            if (current < scenes.length) {
                scenes[current].classList.add("active");
                changeScene();
            }

        }, delay);

    }

    changeScene();

}

// Floating Hearts
function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (18 + Math.random() * 18) + "px";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }, 500);

}