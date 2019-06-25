const text = document.querySelectorAll('.has-tooltip');

for (let i = 0; i < text.length; i++) {
    text[i].addEventListener('click', function() {
        text[i].getAttribute('title');
    });
}
