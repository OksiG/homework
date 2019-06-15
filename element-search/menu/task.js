const menu = document.querySelectorAll("ul.menu_main li");
const menuSub = document.querySelectorAll("ul.menu_sub li");

for (let i = 0; i < menuSub.length; i++) {
    menu[i].addEventListener("click", function() {
        if(menuSub[i].classList.contains('menu_active')) {
            menuSub[i].classList.remove('menu_active');
        }
        else {
            menuSub[i].classList.add('menu_active');
        }  
    });
}