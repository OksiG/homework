const texts = document.getElementsByClassName('rotator__case');
let i = 0;
let timeChange = 0;

function getI () {
    if (i === (texts.length - 1)) {
        i = 0;
    } else {
        i++;
    }
    return i;
}

function changeTexts () {
    texts[i].classList.remove('rotator__case_active');
    getI();
    texts[i].style.color = texts[i].dataset.color;    
    texts[i].classList.add('rotator__case_active');
}

function changeSpeed () {
    getI();
    return timeChange = speed[i].dataset.speed;
}

setInterval(changeTexts, changeSpeed);

