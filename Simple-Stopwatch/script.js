let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timerInterval = null;
let isRunning = false;

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    let ms = String(Math.floor((milliseconds % 1000) / 10)).padStart(2, '0');
    let sec = String(seconds).padStart(2, '0');
    let min = String(minutes).padStart(2, '0');
    timeDisplay.textContent = min + ':' + sec + ':' + ms;
}

function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
    timerInterval = setInterval(() => {
        milliseconds += 10;
        
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds += 1;
        }
        
        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }
        
        updateDisplay();
    }, 10);
}

function stopTimer() {
    if (!isRunning) return;
    
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    clearInterval(timerInterval);
}

function resetTimer() {
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    
    clearInterval(timerInterval);
    updateDisplay();
    
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
