const editor = document.getElementById('editor');

editor.addEventListener('input', function (e) {    
    localStorage.setItem('saveText', editor.value);
});

window.addEventListener('load', function (e) {
    if (localStorage.saveText) {
        editor.value = localStorage.getItem('saveText');
    }
});