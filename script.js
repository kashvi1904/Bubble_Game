var timer = 30;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreBox").textContent = score;
}

function decreaseScore(){
    score -= 5;
    document.querySelector("#scoreBox").textContent = score;
}

function makeBubble(){
    var clutter = "";

    for(var i = 0 ; i<105 ; i++){
        var a = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${a}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerInterval= setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;   
         }else{
            clearInterval(timerInterval);
            document.querySelector("#pbottom").innerHTML = `<h1 style="color: black"; >GAME OVER</h1>`;
         }
    }, 1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitBox").textContent = hitrn;
}

document.querySelector("#pbottom")
.addEventListener("click",function(details){
    var clck = Number(details.target.textContent);
    if(clck === hitrn){
        increaseScore();
    }else{
         decreaseScore();
    }
    getNewHit();
    makeBubble();
});

getNewHit();
makeBubble();
runTimer();