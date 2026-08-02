// ELEMENTS

const startBtn = document.getElementById("startBtn");

const hero = document.getElementById("hero");

const story = document.getElementById("story");

const music = document.getElementById("bgMusic");

const loader = document.getElementById("loader");

const scenes = document.querySelectorAll(".scene");


// PAGE LOADING

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

},1500);

});


// START BUTTON

startBtn.addEventListener("click",()=>{


// hide hero

hero.style.display="none";


// show story

story.style.display="flex";


// music start

music.play().catch(()=>{});


// start scenes

startStory();


// hearts

createHearts();


});
// STORY CONTROL

function startStory(){

let current = 0;


// first scene show

showScene(current);


let timer = setInterval(()=>{


// remove old scene

scenes[current].classList.remove("active");


// next scene

current++;


if(current < scenes.length){

showScene(current);

}

else{

clearInterval(timer);

}


},5000);


}


// SHOW SCENE

function showScene(index){

scenes[index].classList.add("active");

}



// FLOATING HEARTS

function createHearts(){


setInterval(()=>{


const heart = document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left = Math.random()*100 + "vw";


heart.style.animationDuration = 
(5 + Math.random()*5) + "s";


heart.style.fontSize =
(15 + Math.random()*30) + "px";


document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},10000);



},600);



}