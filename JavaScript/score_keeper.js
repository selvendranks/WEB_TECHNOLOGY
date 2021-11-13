// const p1button = document.querySelector("#p1button");
// const p2button = document.querySelector("#p2button");
// const reset = document.querySelector("#reset");

// const p1score = document.querySelector("#p1score");
// const p2score = document.querySelector("#p2score");

// const winScore = document.querySelector('#win');

// let gameover = false;
// let pl1score = 0;
// let pl2score = 0;

// p1button.addEventListener("click", (arg) => {
     
    
//     if (gameover == false) {
//         pl1score += 1;
//         p1score.innerText = pl1score;
//     }
//     decision();
// })

// p2button.addEventListener("click", (args) => {
     
    
//     if (gameover == false) {
//         pl2score += 1;
//         p2score.innerText = pl2score;
//     }
//     decision();
 
// })
// reset.addEventListener("click",(arg)=>{
        
//    window.location.reload();
// })

// const decision = () => {

//     if (pl1score >= winScore.value) {
//         gameover = true;
//         disableButton();
//         changeColor("green", "red");
//     }

//     else if (pl2score >= winScore.value) {
//         gameover=true;
//         disableButton();
//         changeColor("red", "green");
//     }
// }

// const changeColor = (color1, color2) => {
//     p1score.style.color = color1;
//     p2score.style.color = color2;
// }


// const disableButton = () => {
//     p1button.disabled = true;
//     p2button.disabled = true;
// }
/////////////////////////////////////////////////////////////////////////////////////best way to do it

const p1 ={
    Score : 0,
    button: document.querySelector("#p1button"),
    Display : document.querySelector("#p1Display")

}

const p2 ={
    Score : 0,
    button: document.querySelector("#p2button"),
    Display : document.querySelector("#p2Display")

}

const resetbutton = document.querySelector("#reset");
const winScore = document.querySelector('#playto');

let winningScore = parseInt(winScore.value);
let isGameOver = false;


winScore.addEventListener('change',(args)=>{

    winningScore = parseInt(winScore.value);
    reset();
})

function updateScore(player,opponent){
    if(!isGameOver) 
    {
        player.Score +=1;
        if(player.Score === winningScore){
            isGameOver = true;
            player.Display.classList.add('has-text-success');
            opponent.Display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled =true;
        }
        player.Display.textContent = player.Score;
    }
}
p1.button.addEventListener('click',(args)=>{
   updateScore(p1,p2);
})

p2.button.addEventListener('click',(args)=>{
    updateScore(p2,p1);
})

resetbutton.addEventListener('click',reset)

function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.Score = 0;
        p.Display.textContent = 0;
        p.Display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;
        
    }
  
}

