// import { without } from "lodash";
var _ = require("lodash");

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("answer:", _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

window.onload = function() {
  setGradient();
};

function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//CONVERT RANDOM RGB TO HEX
function componentToHex(c) {
  //turn random number to string
  var hex = c.toString(16);
  //if hex.length equals 1 then add 0 to hex otherwise return hex
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  //RGB variables
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//RANDOM BUTTON
random.addEventListener("click", function() {
  //update the value
  color1.value = rgbToHex();
  color2.value = rgbToHex();
  //update the background
  setGradient();
});
