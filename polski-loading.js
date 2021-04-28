var video = document.getElementById("myVideo");
var btn = document.getElementById("play");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Zatrzymać";
  } else {
    video.pause();
    btn.innerHTML = "Graj";
  }
}
function jump() {
document.getElementById("goat").style.top = "180px";
}
function gravity() {
document.getElementById("goat").style.top = "218px";
}
function loadA() {
document.getElementById("a").style.background = "#63bd04";
document.getElementById("loadPercent").innerHTML = "Ładowanie 25%";
}
function loadB() {
document.getElementById("b").style.background = "#63bd04";
document.getElementById("loadPercent").innerHTML = "Ładowanie 50%";
}
function loadC() {
document.getElementById("c").style.background = "#63bd04";
document.getElementById("loadPercent").innerHTML = "Ładowanie 75%";
}
function loadD() {
document.getElementById("d").style.background = "#63bd04";
document.getElementById("loadPercent").innerHTML = "Ładowanie 100%";
}
function finalLoad() {
document.getElementById("setOne").style.visibility = "hidden";
document.getElementById("setTwo").style.visibility = "visible";
}
