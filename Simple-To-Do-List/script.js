var data1 = document.getElementById('x');
var data2 = document.getElementById('list');
var data3 = [];

function read() {
    var a = localStorage.getItem('mydata');
    if (a != null) {
        data3 = JSON.parse(a);
        data2.innerHTML = "";
        for (var i = 0; i < data3.length; i = i + 1) {
            var b = data3[i];
            var c = '<div class="item">' + b + ' <button class="del-btn" onclick="del(' + i + ')">X</button></div>';
            data2.innerHTML = data2.innerHTML + c;
        }
    }
}

function save() {
    var val = data1.value;
    if (val == "") {
        alert("Write something first!");
    } else {
        data3.push(val);
        var str = JSON.stringify(data3);
        localStorage.setItem('mydata', str);
        data1.value = "";
        read();
    }
}

function del(id) {
    var newlist = [];
    for (var j = 0; j < data3.length; j = j + 1) {
        if (j != id) {
            newlist.push(data3[j]);
        }
    }
    data3 = newlist;
    var str2 = JSON.stringify(data3);
    localStorage.setItem('mydata', str2);
    read();
}

read();
