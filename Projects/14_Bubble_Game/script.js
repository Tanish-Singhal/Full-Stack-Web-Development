let timer = 60;
let score = 0;
let hitNum = 0;

function makeBubble() {
    let btn = "";

    for (let i = 1; i <= 70; i++) {
        let num = Math.floor(Math.random() * 10);
        btn = btn + `<div class="circleBtn"><h3>${num}</h3></div>`;
    }
    
    document.querySelector(".numberBtn").innerHTML = btn;
};

function newHit() {
    hitNum = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").innerHTML = hitNum;
}

function increaseScore() {
    score = score + 10;
    document.querySelector("#scoreVal").innerHTML = score;
}

// Event Listener
// jispar click karoge to uss element par event raise hoga, 
// aur event listener na milne par event element apne parent par listener dundega,
// waha bhi na milne par element apne parent k parent par listener dundega

// FIXME: so now, we want to click on bubbles, so we want to add listener to the bubbles
// but there are 70 bubbles (means 70 listeners)
// as we know from above, phele listener element pare check karega, then apne parent par, and then apne parent k parent par

// to make it easy we can add listener on the on the bubble parent (which is "numberBtn")
document.querySelector(".numberBtn").addEventListener("click", function(details) {
    let clickNum = (Number(details.target.textContent));        // by .target we get the div of the element clicked, then we take only the number part, then that number we get was string, then we convert it to a number

    // now wee want to compare that number with the hit number (which is "run" in newHit function)
    if (clickNum === hitNum) {
        increaseScore();
        makeBubble();
        newHit();
    }
});

function timerStart() {
    let timerInt = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeVal").innerHTML = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector(".numberBtn").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
};




makeBubble();
newHit();
timerStart();