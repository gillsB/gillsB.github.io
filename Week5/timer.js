var colorChangingBox = document.getElementById("colorChangingBox");
var colors = ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "green"];
var counter = 0;
var winMessageSent = false;
var delay = 500;

function changeColor() {
  if (counter == colors.length) {
    counter = 0;
  }
  colorChangingBox.style.background = colors[counter];
  counter++;
}

var timer = setInterval(changeColor, delay);
var update = setInterval(getMS, delay);

colorChangingBox.onclick = function () {
  if (counter == colors.length && !winMessageSent) {
    clearInterval(timer);
    alert("You win! Click the box again to reset with a slightly faster speed!");
    winMessageSent = true;
  } else if (counter == colors.length && winMessageSent) {
    winMessageSent = false;
    delay -= 25;
    timer = setInterval(changeColor, delay);
  } else {
    counter = getRandomInt(colors.length - 2);
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getMS() {
  var speedLoc = document.getElementById("speed");
  speedLoc.firstChild.nodeValue = "Current speed: " + delay + "ms";
}
