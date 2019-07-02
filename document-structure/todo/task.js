let newTask = document.getElementById('tasks__list');
let inputTask = document.getElementById('task__input');
let addTask = document.getElementById('tasks__add');
let remove = document.getElementsByClassName('task__remove');

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
      
        e.preventDefault();
        return false;
    }
}

addTask.addEventListener('click', addedTask);

for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', function() {
        newTask.children[i].remove();
    });
}