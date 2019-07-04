let newTask = document.getElementById('tasks__list');
let inputTask = document.getElementById('task__input');
let addTask = document.getElementById('tasks__add');

function addedTask(e) {
    if ((this === inputTask) && (e.keyCode != 13)) {
        return;
    }

    if (inputTask.value != '') {
        newTask.insertAdjacentHTML('afterBegin', 
            `<div class="task">
                <div class="task__title">
                ${inputTask.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`);
        inputTask.value = '';
        e.preventDefault();
        return false;
    }

    let remove = document.querySelector('.task__remove');
    remove.addEventListener('click', function() {
        newTask.remove();
        e.preventDefault();
    });
}

addTask.addEventListener('click', addedTask);