let startTime;
let running = false;
let elapsedTime = 0;

function startStopwatch() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsedTime;
    update();
  }
}

function stopStopwatch() {
  if (running) {
    running = false;
    elapsedTime = Date.now() - startTime;
  }
}

function resetStopwatch() {
  running = false;
  elapsedTime = 0;
  updateDisplay(0, 0, 0, 0);
}

function update() {
  if (running) {
    let currentTime = Date.now() - startTime;
    let hours = Math.floor(currentTime / 3600000);
    let minutes = Math.floor((currentTime % 3600000) / 60000);
    let seconds = Math.floor((currentTime % 60000) / 1000);
    let milliseconds = Math.floor((currentTime % 1000) / 10);

    updateDisplay(hours, minutes, seconds, milliseconds);
    setTimeout(update, 10);
  }
}

function updateDisplay(hours, minutes, seconds, milliseconds) {
  document.getElementById('hr').textContent = hours < 10 ? `0${hours}` : hours;
  document.getElementById('min').textContent = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById('sec').textContent = seconds < 10 ? `0${seconds}` : seconds;
  document.getElementById('count').textContent = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
}
