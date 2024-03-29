const modalMain = document.getElementById("subscribe-modal");
const closeModalMain = modalMain.getElementsByClassName("modal__close");

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
 
closeModalMain[0].onclick = function(e) {
    e.preventDefault();
    document.cookie = 'isClosed=true';
    modalMain.classList.remove("modal_active");
}

window.addEventListener('load', function(e) {
    if (!getCookie('isClosed')) {
        modalMain.classList.add('modal_active');
    }
});