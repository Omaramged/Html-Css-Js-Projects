let intervalId;
let seconds = 0;
let isRunning = false;

// DOM Elements
const startBtn = document.getElementById("btn1");
const pauseBtn = document.getElementById("btn2");
const resetBtn = document.getElementById("btn3");
const timeDisplay = document.getElementById("timeDisplay");

/**
 * Format total seconds into a HH:MM:SS string gracefully.
 */
function formatTime(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  
  return [h, m, s]
    .map(val => val.toString().padStart(2, '0'))
    .join(':');
}

/**
 * Update the DOM with the formatted time.
 */
function updateDisplay() {
  timeDisplay.textContent = formatTime(seconds);
}

// Start Timer
startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    // Visually indent the button as active state handling (optional extension)
    intervalId = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
});

// Pause Timer
pauseBtn.addEventListener("click", () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(intervalId);
  }
});

// Reset Timer
resetBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(intervalId);
  seconds = 0;
  updateDisplay();
});
