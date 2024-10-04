let startTime;
let elapesdTime = 0;
let timerInterval;
document.getElementById("timer").innerHTML = "00:00:00";

function DisplayTime(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 1000;
  let ms = Math.floor(diffInMs);

  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(3, "0");

  return `${formattedHH}:${formattedMM}:${formattedSS}.  ${formattedMS}`;
}

function start() {
  startTime = Date.now() - elapesdTime;
  timerInterval = setInterval(() => {
    elapesdTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = DisplayTime(elapesdTime);
  }, 10);

  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  document.getElementById("reset").disabled = false;
}

function stop() {
  clearInterval(timerInterval);
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("reset").disabled = false;
}

function reset() {
  clearInterval(timerInterval);
  document.getElementById("timer").innerHTML = "00:00:00";
  elapesdTime = 0;
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
