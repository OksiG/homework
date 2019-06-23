let newTask = document.getElementById('tasks__list');
let inputTask = document.getElementById('task__input');
let addTask = document.getElementById('tasks__add');

function addedTask(e) {
    if (inputTask.value != '') {
        newTask.insertAdjacentElement('afterBegin', 
            `<div class="task">
                <div class="task__title">
                ${inputTask.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`);
        inputTask = '';
        e.preventDefault();
        return false;
    }
}

inputTask.addEventListener('keypress', addedTask);
addTask.addEventListener('click', addedTask);
