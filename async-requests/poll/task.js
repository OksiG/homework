const answers = document.getElementById('poll__answers');
const question = document.getElementById('poll__title');

let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.addEventListener('readystatechange', function() {
    if (request.readyState == request.DONE && request.status == 200) {
        
        let data = JSON.parse(request.responseText).data;
        question.innerText = data.title;
        
        for (let answer of data.answers) {
            let button = `<button class="poll__answer">${answer}</button>`
            
            answers.insertAdjacentHTML('beforeEnd', button);
        }

        const answerButtons = document.querySelectorAll('.poll__answer');

        for (let answerButton of answerButtons) {
            answerButton.addEventListener('click', function () {
                alert('Спасибо, ваш голос засчитан!');
            });
        }
    }
});
request.send();