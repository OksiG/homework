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
    } else {
        e.preventDefault();
    }

    let remove = document.querySelectorAll('.task__remove');
    let task = document.querySelectorAll('.task');

    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', function(e) {
            e.preventDefault();
            task[i].remove();
        });
    }
    
}

addTask.addEventListener('click', addedTask);