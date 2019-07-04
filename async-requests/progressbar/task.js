const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    const request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);

    request.upload.onprogress = function(event) {
        progress.value = event.loaded / 1000000;
      }
    
    request.onload = request.onerror = function() {
        if (this.status == 200) {
          log("success");
        } else {
          log("error " + this.status);
        }
      };
    
    request.send(formData);
});
