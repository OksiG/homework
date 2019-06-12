const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole( index ) {
    return document.getElementById(`hole${index}`);
}

for (let index = 1; index < 9; index++) {
    let hole = getHole( index );
    hole.onclick = function() {
        if (hole.className.includes( 'hole_has-mole' )) {
            dead.textContent ++; 
            if (dead.textContent >= 10) {
                alert('Победа!');
                dead.textContent === 0;
                lost.textContent === 0;
                return;
            } 
        } else {
            lost.textContent ++;
            if (lost.textContent >= 5) {
                alert('Вы проиграли!');
                dead.textContent === 0;
                lost.textContent === 0;
                return;
            } 
        }
    }  
}