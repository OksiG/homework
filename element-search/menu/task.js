const menu = document.querySelectorAll('.menu_main > li');

for (let i = 0; i < menu.length; i++) { 
    menu[i].addEventListener("click", function() {
        event.preventDefault();
        if(menu[i].children[1].classList.contains('menu_active')) {
            menu[i].children[1].classList.remove('menu_active');
        }
        else {
            menu[i].children[1].classList.add('menu_active');
        }  
    });
}