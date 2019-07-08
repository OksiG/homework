const text = document.querySelectorAll('.has-tooltip');
const tip = document.querySelector('.tooltip');

for (let item of text) {
        item.insertAdjacentHTML('afterEnd', 
        `<div class="tooltip" style="left: 0; top: 0">
        ${item.getAttribute('title')}
        </div>`);

        item.addEventListener('click', function(e) {
            e.preventDefault();

        if (item.className == tooltip_active) {
            item.classList.remove('tooltip_active');
        }

        tip.classList.add('tooltip_active');
        tip.innerText = e.target.title;
        tip.style.top = e.target.getBoundingClientRect().top + 20 + 'px';
        tip.style.left = e.target.getBoundingClientRect().left + 'px';
    });
}
