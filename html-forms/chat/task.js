const chatOpen = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages');
const input = document.getElementById('chat-widget__input');
const messagesBot = ['Вы не купили ни одного товара с нашего сайта, чтобы так с нами разговаривать!','Мы не будем вам ничего продавать!','Добрый день! До свидания!','К сожалению, все операторы сейчас заняты. Не пишите нам больше!','Где ваша совесть?','Кто тут?'];
const time = {
    hour: 'num',
    minute: 'num',
    second: 'num'
  };

chatOpen.addEventListener('click', function() {
    chatOpen.classList.add('chat-widget_active');
});

function randomMessage(min = 0, max = messagesBot.length - 1) {
    let random  = min - 0.5 + Math.random() * (max - min + 1);
    random = Math.round(random);
    return random;
}

function sendMessageBot() {
    let realDate = new Date();
    realDate = realDate.toLocaleString("ru", time);
    messages.innerHTML += `
    <div class="message">
      <div class="message__time"> ${realDate} </div>
      <div class="message__text"> ${messagesBot[randomMessage()]}</div>
    </div>
    `;
}


function sendMessageClient(e) {
    if (e.keyCode == 13 && input.value != '') {
        e.preventDefault();
        let realDate = new Date();
        realDate = realDate.toLocaleString("ru", time);
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time"> ${realDate} </div>
            <div class="message__text"> ${input.value} </div>
        </div>
        `;
        realDate.value = '';
        sendMessageBot();
        return false; 
    }
}

input.addEventListener('keypress', sendMessageClient(e));





