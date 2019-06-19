const texts = document.getElementsByClassName('rotator__case');
let i = 0;

function changeTexts () {
    texts[i].classList.remove('rotator__case_active');
    i == (texts.length - 1) ? 0 : i++;
    texts[i].classList.add('rotator__case_active');
}

setInterval(changeTexts, 1000);