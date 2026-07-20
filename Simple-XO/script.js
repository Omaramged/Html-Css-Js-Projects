var turn = "X";
var win = 0;

function click1() {
  var b1 = document.getElementById("box1");
  if (b1.innerHTML == "") {
    if (win == 0) {
      if (turn == "X") {
        b1.innerHTML = "X";
        turn = "O";
        document.getElementById("message").innerHTML = "Turn: O";
      } else {
        b1.innerHTML = "O";
        turn = "X";
        document.getElementById("message").innerHTML = "Turn: X";
      }
      checkwin();
    }
  }
}

function click2() {
  var b2 = document.getElementById("box2");
  if (b2.innerHTML == "") {
    if (win == 0) {
      if (turn == "X") {
        b2.innerHTML = "X";
        turn = "O";
        document.getElementById("message").innerHTML = "Turn: O";
      } else {
        b2.innerHTML = "O";
        turn = "X";
        document.getElementById("message").innerHTML = "Turn: X";
      }
      checkwin();
    }
  }
}

function click3() {
  var b3 = document.getElementById("box3");
  if (b3.innerHTML == "") {
    if (win == 0) {
      if (turn == "X") {
        b3.innerHTML = "X";
        turn = "O";
        document.getElementById("message").innerHTML = "Turn: O";
      } else {
        b3.innerHTML = "O";
        turn = "X";
        document.getElementById("message").innerHTML = "Turn: X";
      }
      checkwin();
    }
  }
}

function click4() {
  var b4 = document.getElementById("box4");
  if (b4.innerHTML == "") {
    if (win == 0) {
      if (turn == "X") {
        b4.innerHTML = "X";
        turn = "O";
        document.getElementById("message").innerHTML = "Turn: O";
      } else {
        b4.innerHTML = "O";
        turn = "X";
        document.getElementById("message").innerHTML = "Turn: X";
      }
      checkwin();
    }
  }
}

function click5() {
  var b5 = document.getElementById("box5");
  if (b5.innerHTML == "") {
    if (win == 0) {
      if (turn == "X") {
        b5.innerHTML = "X";
        turn = "O";
        document.getElementById("message").innerHTML = "Turn: O";
      } else {
        b5.innerHTML = "O";
        turn = "X";
        document.getElementById("message").innerHTML = "Turn: X";
      }
      checkwin();
    }
  }
}

function click6() {
  var b6 = document.getElementById("box6");
  if (b6.innerHTML == "") {
    if (win == 0) {
      if (turn == "X") {
        b6.innerHTML = "X";
        turn = "O";
        document.getElementById("message").innerHTML = "Turn: O";
      } else {
        b6.innerHTML = "O";
        turn = "X";
        document.getElementById("message").innerHTML = "Turn: X";
      }
      checkwin();
    }
  }
}

function click7() {
  var b7 = document.getElementById("box7");
  if (b7.innerHTML == "") {
    if (win == 0) {
      if (turn == "X") {
        b7.innerHTML = "X";
        turn = "O";
        document.getElementById("message").innerHTML = "Turn: O";
      } else {
        b7.innerHTML = "O";
        turn = "X";
        document.getElementById("message").innerHTML = "Turn: X";
      }
      checkwin();
    }
  }
}

function click8() {
  var b8 = document.getElementById("box8");
  if (b8.innerHTML == "") {
    if (win == 0) {
      if (turn == "X") {
        b8.innerHTML = "X";
        turn = "O";
        document.getElementById("message").innerHTML = "Turn: O";
      } else {
        b8.innerHTML = "O";
        turn = "X";
        document.getElementById("message").innerHTML = "Turn: X";
      }
      checkwin();
    }
  }
}

function click9() {
  var b9 = document.getElementById("box9");
  if (b9.innerHTML == "") {
    if (win == 0) {
      if (turn == "X") {
        b9.innerHTML = "X";
        turn = "O";
        document.getElementById("message").innerHTML = "Turn: O";
      } else {
        b9.innerHTML = "O";
        turn = "X";
        document.getElementById("message").innerHTML = "Turn: X";
      }
      checkwin();
    }
  }
}

function checkwin() {
  var v1 = document.getElementById("box1").innerHTML;
  var v2 = document.getElementById("box2").innerHTML;
  var v3 = document.getElementById("box3").innerHTML;
  var v4 = document.getElementById("box4").innerHTML;
  var v5 = document.getElementById("box5").innerHTML;
  var v6 = document.getElementById("box6").innerHTML;
  var v7 = document.getElementById("box7").innerHTML;
  var v8 = document.getElementById("box8").innerHTML;
  var v9 = document.getElementById("box9").innerHTML;

  if (v1 == "X" && v2 == "X" && v3 == "X") {
    document.getElementById("message").innerHTML = "X WINS!";
    win = 1;
  }
  if (v4 == "X" && v5 == "X" && v6 == "X") {
    document.getElementById("message").innerHTML = "X WINS!";
    win = 1;
  }
  if (v7 == "X" && v8 == "X" && v9 == "X") {
    document.getElementById("message").innerHTML = "X WINS!";
    win = 1;
  }
  if (v1 == "X" && v4 == "X" && v7 == "X") {
    document.getElementById("message").innerHTML = "X WINS!";
    win = 1;
  }
  if (v2 == "X" && v5 == "X" && v8 == "X") {
    document.getElementById("message").innerHTML = "X WINS!";
    win = 1;
  }
  if (v3 == "X" && v6 == "X" && v9 == "X") {
    document.getElementById("message").innerHTML = "X WINS!";
    win = 1;
  }
  if (v1 == "X" && v5 == "X" && v9 == "X") {
    document.getElementById("message").innerHTML = "X WINS!";
    win = 1;
  }
  if (v3 == "X" && v5 == "X" && v7 == "X") {
    document.getElementById("message").innerHTML = "X WINS!";
    win = 1;
  }

  if (v1 == "O" && v2 == "O" && v3 == "O") {
    document.getElementById("message").innerHTML = "O WINS!";
    win = 1;
  }
  if (v4 == "O" && v5 == "O" && v6 == "O") {
    document.getElementById("message").innerHTML = "O WINS!";
    win = 1;
  }
  if (v7 == "O" && v8 == "O" && v9 == "O") {
    document.getElementById("message").innerHTML = "O WINS!";
    win = 1;
  }
  if (v1 == "O" && v4 == "O" && v7 == "O") {
    document.getElementById("message").innerHTML = "O WINS!";
    win = 1;
  }
  if (v2 == "O" && v5 == "O" && v8 == "O") {
    document.getElementById("message").innerHTML = "O WINS!";
    win = 1;
  }
  if (v3 == "O" && v6 == "O" && v9 == "O") {
    document.getElementById("message").innerHTML = "O WINS!";
    win = 1;
  }
  if (v1 == "O" && v5 == "O" && v9 == "O") {
    document.getElementById("message").innerHTML = "O WINS!";
    win = 1;
  }
  if (v3 == "O" && v5 == "O" && v7 == "O") {
    document.getElementById("message").innerHTML = "O WINS!";
    win = 1;
  }

  if (win == 0 && v1 != "" && v2 != "" && v3 != "" && v4 != "" && v5 != "" && v6 != "" && v7 != "" && v8 != "" && v9 != "") {
    document.getElementById("message").innerHTML = "DRAW!";
    win = 1;
  }
}

function restart() {
  document.getElementById("box1").innerHTML = "";
  document.getElementById("box2").innerHTML = "";
  document.getElementById("box3").innerHTML = "";
  document.getElementById("box4").innerHTML = "";
  document.getElementById("box5").innerHTML = "";
  document.getElementById("box6").innerHTML = "";
  document.getElementById("box7").innerHTML = "";
  document.getElementById("box8").innerHTML = "";
  document.getElementById("box9").innerHTML = "";
  turn = "X";
  win = 0;
  document.getElementById("message").innerHTML = "Turn: X";
}
