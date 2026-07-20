var data1 = "";

function click1() {
    data1 = data1 + "1";
    document.getElementById("screen").value = data1;
}

function click2() {
    data1 = data1 + "2";
    document.getElementById("screen").value = data1;
}

function click3() {
    data1 = data1 + "3";
    document.getElementById("screen").value = data1;
}

function click4() {
    data1 = data1 + "4";
    document.getElementById("screen").value = data1;
}

function click5() {
    data1 = data1 + "5";
    document.getElementById("screen").value = data1;
}

function click6() {
    data1 = data1 + "6";
    document.getElementById("screen").value = data1;
}

function click7() {
    data1 = data1 + "7";
    document.getElementById("screen").value = data1;
}

function click8() {
    data1 = data1 + "8";
    document.getElementById("screen").value = data1;
}

function click9() {
    data1 = data1 + "9";
    document.getElementById("screen").value = data1;
}

function click0() {
    data1 = data1 + "0";
    document.getElementById("screen").value = data1;
}

function clickAdd() {
    data1 = data1 + "+";
    document.getElementById("screen").value = data1;
}

function clickSub() {
    data1 = data1 + "-";
    document.getElementById("screen").value = data1;
}

function clickMult() {
    data1 = data1 + "*";
    document.getElementById("screen").value = data1;
}

function clickDiv() {
    data1 = data1 + "/";
    document.getElementById("screen").value = data1;
}

function clickClear() {
    data1 = "";
    document.getElementById("screen").value = data1;
}

function clickEqual() {
    var result = eval(data1);
    document.getElementById("screen").value = result;
    data1 = result;
}
