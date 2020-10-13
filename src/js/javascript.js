const beat = document.querySelector(".beat");
const bpm = document.getElementById("tempo").value;
const realTempo = 60000 / bpm;
const screen = document.querySelector(".screen");
screen.textContent = bpm;

function start() {
    const dontStopMeNow = setInterval(beat.play(), realTempo);
} 

const stop = () => {
    clearInterval(dontStopMeNow);
}

const greenButton = document.querySelector(".start");
greenButton.addEventListener("click", start);
const redButton = document.querySelector(".end");
redButton.addEventListener("click", stop);
