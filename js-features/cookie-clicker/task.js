const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");

const addClicker = function() {
    clicker.textContent ++;
    image.width = 250;
}

image.onclick = addClicker;

