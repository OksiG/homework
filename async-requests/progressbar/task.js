const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    const request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);

    request.onprogress = function(e) {
        progress.value = e.loaded / 1000000;
      }
    
    request.send(formData);
});
