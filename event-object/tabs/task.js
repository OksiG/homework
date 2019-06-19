const menu = document.getElementsByClassName("tab");
const content = document.getElementsByClassName("tab__content");



for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function() {
        for (let j = 0; menu.length > j; j++) {
            if (menu[j].classList.contains('tab_active')) {
                menu[j].classList.remove('tab_active');
                content[j].classList.remove('tab__content_active');
            }             
        }
        menu[i].classList.add('tab_active');
        content[i].classList.add('tab__content_active');
    });
}


