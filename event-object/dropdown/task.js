const dropItem = document.getElementsByClassName('dropdown__item');
const dropValue = document.getElementsByClassName('dropdown__value');
const dropMain = document.getElementsByClassName('dropdown__list');

dropValue[0].addEventListener('click', function() {
    if (dropMain[0].classList.contains('dropdown__list_active')) {
        dropMain[0].classList.remove('dropdown__list_active');
    } else {
        dropMain[0].classList.add('dropdown__list_active');
    }
});

for (let i = 0; i < dropItem.length; i++) {
    dropItem[i].addEventListener('click', function() {
        event.preventDefault();
        dropValue[0].textContent = dropItem[i].textContent;
        dropMain[0].classList.remove('dropdown__list_active');
    });
}




