const colorCode=document.getElementById("code");
const options=document.getElementById("options");
const scoreContainer=document.getElementById("score");
let score=0;
let randomColor=null;
function randomNumberGenerator(min, max){
   return min + Math.floor(Math.random() * (max - min + 1));
}

function randomColorGenerator(){
    const red = randomNumberGenerator(0,255);
    const green = randomNumberGenerator(0,255);
    const blue = randomNumberGenerator(0,255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore(){
    score++;
    scoreContainer.innerText=score;
}

function validateClick(elem){
    const selectedColor=elem.target.style.backgroundColor;
    if(selectedColor===randomColor){
        incrementScore();
    }
    else{
        score=0;
    }
    window.localStorage.setItem("score",score);
    startGame();
}
function startGame(){
    score=window.localStorage.getItem("score") ?? 0;
    scoreContainer.innerText=score;
    options.innerText=null;
    randomColor= randomColorGenerator()
    colorCode.innerText=randomColor;
    const ansIndex=randomNumberGenerator(0,5);
    for(let i=0;i<6;i++){
        const div=document.createElement("div");
        div.addEventListener("click",validateClick);
        div.style.backgroundColor= i===ansIndex? randomColor: randomColorGenerator();
        options.append(div);
    }
}

window.addEventListener("load", () => startGame())
