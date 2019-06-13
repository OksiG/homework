const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const closeModalMain = modalMain.getElementsByClassName("modal__close");
const closeModalSuccess = modalSuccess.getElementsByClassName("modal__close");
const showSuccess = document.getElementsByClassName("show-success");

modalMain.classList.add("modal_active");

showSuccess[0].onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");    
}

closeModalMain[0].onclick = function() {
    modalMain.classList.remove("modal_active");
    modalMain.classList.add("modal__close");
}

closeModalSuccess[0].onclick = function () {
    modalSuccess.classList.remove("modal_active");
}

