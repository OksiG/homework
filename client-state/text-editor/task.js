const editor = document.getElementById('editor');
let text = editor.value;

editor.addEventListener('input', function (e) {    
    localStorage.setItem('saveText', `${text}`);
});

window.addEventListener('load', function (e) {
    text = localStorage.getItem('saveText');
});