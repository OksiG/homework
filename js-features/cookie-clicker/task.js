const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");

const addClicker = function() {
    clicker.textContent ++;
    ( clicker.textContent % 2 == 0) ? image.width = 200 : image.width = 250;
}

image.onclick = addClicker;

