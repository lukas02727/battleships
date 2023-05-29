const play = document.getElementById("play");
const menu = document.getElementById("menu");
const board = document.getElementById("board");
const score = document.getElementById("score");
const Scorea = document.getElementById("score_score");
const home = document.getElementById("home");
const destroyedBattleship = document.getElementsByClassName("destroyed_battleship");
const ocean = document.getElementsByClassName("ocean");
const emptyOcean = document.getElementsByClassName("ocean_empty");
const field = document.getElementsByClassName("field");
const Indicator = document.getElementById("indicator");
const IndicatorA = document.getElementById("indicator_still");
const Win = document.getElementById("win");
const SettingInside = document.getElementById("setting_inside");
const SettingIcon = document.getElementById("setting_icon");

play.onclick = () => {
    menu.style.display = "block";
    board.style.display = "block";
    play.style.display = "none";
    score.style.display = "block";
    Scorea.style.display = "block";
    Indicator.style.display = "block";
    IndicatorA.style.display = "block";
}
home.onclick = () => {
    IndicatorA.style.display = "none";
    Indicator.style.display = "none";
    board.style.display = "none";
    play.style.display = "block";
    score.style.display = "none";
    Scorea.style.display = "none";
    SettingInside.style.display = "none";


}
SettingIcon.onclick = () => {
    board.style.display = "none";
    SettingInside.style.display = "block";
    score.style.display = "none";
    Scorea.style.display = "none";
    Indicator.style.display = "none";
    IndicatorA.style.display = "none";
    play.style.display = "none";
}
let poles = [];
let scoreNumber = 0;
for (let index = 0; index < 25; index++) {
    const number = Math.floor(Math.random() * 225);
    console.log(number);
    console.log(field[number]);
    poles.push(number);
}

[...field].forEach((other, index) => {
    
    other.onclick = () => {
        scoreNumber-= 5;
        score.innerText = scoreNumber;
        emptyOcean[index-1].style.display = "block";
        
    }
})
poles.forEach(number => {
    destroyedBattleship[number].style.display = "block";
   // destroyedBattleship[number].style.opacity = 0.5;
    
    destroyedBattleship[number].onclick = () => {
        
       
            destroyedBattleship[number].style.opacity = 1;
            scoreNumber+= 55;
            score.innerText = scoreNumber;
            Indicator.innerHTML++;
            if(Indicator.innerHTML >= 25){
                Win.style.display = "block";
               
            }
            else{
                Win.style.display = "none";
            }
            
        }
        
    
});
