var a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function makeColor() {
  var b = "#";
  var c = Math.floor(Math.random() * 16);
  b = b + a[c];
  
  var d = Math.floor(Math.random() * 16);
  b = b + a[d];
  
  var e = Math.floor(Math.random() * 16);
  b = b + a[e];
  
  var f = Math.floor(Math.random() * 16);
  b = b + a[f];
  
  var g = Math.floor(Math.random() * 16);
  b = b + a[g];
  
  var h = Math.floor(Math.random() * 16);
  b = b + a[h];
  
  // Set the background color of the body rather than a single box
  document.body.style.backgroundColor = b;
  document.getElementById("text").innerHTML = b;
}
