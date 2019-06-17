const menu = document.getElementsByClassName("tab");
const content = document.getElementsByClassName("tab_content");

for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function() {
        
        if(menu[i].classList.contains('tab_active')) {
            menu[i].classList.remove('tab_active');
            content[i].classList.remove('tab__content_active');
        }
        else {
            menu[i].classList.add('tab_active');
            content[i].classList.add('tab__content_active');
        }  
    });
}




