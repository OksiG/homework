const modalMain = document.getElementById("subscribe-modal");
const closeModalMain = modalMain.getElementsByClassName("modal__close");

modalMain.classList.add("modal_active");

closeModalMain[0].onclick = function() {
    modalMain.classList.remove("modal_active");
    modalMain.classList.add("modal__close");
}

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
    }
}

window.addEventListener('load', function(e) {
    if (!getCookie('isClosed')) {
        modalMain.classList.add('modal_active');
    }
});
  
closeModalMain[0].onclick = function(e) {
    event.preventDefault();
    document.cookie = 'isClosed=true';
    modalMain.classList.remove("modal_active");
}

