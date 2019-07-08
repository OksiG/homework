const showForm = document.getElementById('signin'); 
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

showForm.classList.add('signin_active');

const button = document.getElementById('signin__btn');

button.addEventListener('click', function (e) {

    e.preventDefault();

    const formAuth = document.getElementById('signin__form');
    const formData = new FormData(formAuth);
    
    const request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    request.addEventListener('readystatechange', function (e) {
        if (request.readyState == request.DONE && request.status == 200) {

            const response = JSON.parse(request.responseText);

            if (response.success) {             

                localStorage.userId = response.user_id;

                showForm.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = response.user_id;

            } else {
                alert('Неверный логин/пароль');
            }
        }
    });
    request.send(formData);
});

function checkId() {

    if (localStorage.userId) {
        formDiv.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.userId;
    }
}

checkId();
