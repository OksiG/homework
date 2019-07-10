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

        let remove = document.querySelector('.task__remove');
        let task = document.querySelector('.task');
    
        
        remove.addEventListener('click', function(e) {
            e.preventDefault();
            task.remove();
        });

        return false;
    } else {
        e.preventDefault();
    } 
}

addTask.addEventListener('click', addedTask);