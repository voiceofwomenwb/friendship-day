const startBtn = document.getElementById("startBtn");
const story = document.getElementById("story");
const music = document.getElementById("music");
const scenes = document.querySelectorAll(".scene");

startBtn.addEventListener("click", () => {

    document.querySelector(".center").style.display = "none";
    story.classList.remove("hide");

    music.play().catch(() => {});

    playStory();
    startHearts();

});

function playStory(){

    let index = 0;

    function nextScene(){

        if(index > 0){
            scenes[index-1].classList.remove("active");
        }

        if(index >= scenes.length){
            return;
        }

        scenes[index].classList.add("active");

        index++;

        setTimeout(nextScene,5000);

    }

    nextScene();

}

function startHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*30)+"px";

        heart.style.animationDuration=(5+Math.random()*4)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },9000);

    },350);

}