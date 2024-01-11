var sec = 0;
var mim = 0;
var hr = 0;
var intervalo;
function start() {
  wacht();
  intervalo = setInterval(wacht, 1000);
}
function pause() {
  clearInterval(intervalo);
  var sec = 0;
  var mim = 0;
  document.getElementById("wacht").innerText = "00:00:00";
}
function stop() {
  clearInterval(intervalo);
}

function two(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}
function wacht() {
  sec++;
  document.getElementById("wacht").innerText =
    two(hr) + ":" + two(mim) + ":" + sec;
  if (sec == 60) {
    mim++;
    sec = 0;
    if (mim == 60) {
      mim = 0;
      hr++;
    }
  }
}
