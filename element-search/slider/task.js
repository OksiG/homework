const prev = document.querySelector('.slider__arrow_prev'); 
const next = document.querySelector('.slider__arrow_next'); 
const sliders = document.querySelectorAll('.slider__item');

prev.onclick = function() {
    for (let i = sliders.length - 1; i < sliders.length; i--) {
        if (sliders[i].classList.contains( 'slider__item_active' )) {
            sliders[i].classList.remove( 'slider__item_active' );
            if (i === 0) {
                i = sliders.length - 1;
            } else {
                i -= 1;
            }
            sliders[i].classList.add( 'slider__item_active' );
            return;
        }
    }
}

next.onclick = function() {
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].classList.contains( 'slider__item_active' )) {
            sliders[i].classList.remove( 'slider__item_active' );
            if (i === sliders.length - 1) {
                i = 0;
            } else {
                i += 1;
            }
            sliders[i].classList.add( 'slider__item_active' );
            return;
        }
    }
}