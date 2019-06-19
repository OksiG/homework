const texts = document.getElementsByClassName('rotator__case');
let i = 0;

function changeTexts () {
    texts[i].classList.remove('rotator__case_active');
    if (i === (texts.length - 1)) {
        i = 0;
    } else {
        i++;
    }
    texts[i].classList.add('rotator__case_active');
}

setInterval(changeTexts, 1000);