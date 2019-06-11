const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const closeModalMain = modalMain.getElementsByClassName("modal__close_times");
const closeModalSuccess = modalSuccess.getElementsByClassName("modal__close_times");
const showSuccess = modalMain.getElementsByClassName("show-success");

modalMain.classList.add("modal_active");

showSuccess.onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");    
}

closeModalMain.onclick = function() {
    modalMain.classList.remove("modal_active");
    modalMain.classList.add("modal__close");
}

closeModalSuccess.onclick = function () {
    modalSuccess.classList.remove("modal_active");
}
