const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

const addDead = function() {
    dead.textContent ++;
}

const addLost = function() {
    lost.textContent ++;
}

function getHole( index ) {
    return document.getElementById(`hole${index}`);
}

for (index = 0; index < 9; index++) {
    let hole = getHole( index );
}

if (hole.className.includes( 'hole_has-mole' )) {
    if (dead >= 10) {
        alert('Победа!');
    } else {
        hole.onclick = addDead;
    }
} else {
    if (lost >= 5) {
        alert('Вы проиграли!');
    } else {
        hole.onclick = addLost;
    }
}

