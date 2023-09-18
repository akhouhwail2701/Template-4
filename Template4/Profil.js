var rd1 = document.getElementsByClassName("rd1");
var rd2 = document.getElementsByClassName("rd2");
var toogle = document.getElementsByClassName("toogle");


rd1[0].onclick = function () {
    rd1[0].style.visibility = "hidden";
    rd2[0].style.visibility = "visible";
    toogle[0].style.backgroundColor = "#001affe3";
}
rd2[0].onclick = function () {
    rd2[0].style.visibility = "hidden";
    rd1[0].style.visibility = "visible";
    toogle[0].style.backgroundColor = "gray";
}

rd1[1].onclick = function () {
    rd1[1].style.visibility = "hidden";
    rd2[1].style.visibility = "visible";
    toogle[1].style.backgroundColor = "#001affe3";
}
rd2[1].onclick = function () {
    rd2[1].style.visibility = "hidden";
    rd1[1].style.visibility = "visible";
    toogle[1].style.backgroundColor = "gray";
}

rd1[2].onclick = function () {
    rd1[2].style.visibility = "hidden";
    rd2[2].style.visibility = "visible";
    toogle[2].style.backgroundColor = "#001affe3";
}
rd2[2].onclick = function () {
    rd2[2].style.visibility = "hidden";
    rd1[2].style.visibility = "visible";
    toogle[2].style.backgroundColor = "gray";
}

rd1[3].onclick = function () {
    rd1[3].style.visibility = "hidden";
    rd2[3].style.visibility = "visible";
    toogle[3].style.backgroundColor = "#001affe3";
}
rd2[3].onclick = function () {
    rd2[3].style.visibility = "hidden";
    rd1[3].style.visibility = "visible";
    toogle[3].style.backgroundColor = "gray";
}