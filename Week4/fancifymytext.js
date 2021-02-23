function Bigger() {
  document.getElementById("TextBox").style.fontSize = "24pt";
}

function Fancy() {
  textBox = document.getElementById("TextBox");
  textBox.style.fontWeight = "Bold";
  textBox.style.color = "blue";
  textBox.style.textDecoration = "underline";
}

function Boring() {
  textBox = document.getElementById("TextBox");
  textBox.style.fontWeight = "normal";
  textBox.style.color = "black";
  textBox.style.textDecoration = "none";
}

function Moo() {
  textBox = document.getElementById("TextBox");
  textBox.style.textTransform = "uppercase";

  var str = textBox.value;
  var parts = str.split("."); // ["How", "are", "you?"]
  str = parts.join("-Moo."); // "How_are_you?"
  textBox.value = str;
}
