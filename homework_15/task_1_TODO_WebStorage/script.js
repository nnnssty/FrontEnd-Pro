document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('taskList');
    const addTaskInput = document.getElementById('addTaskInput');
    const addTaskButton = document.getElementById('addTaskButton');

    function addTask() {
        const taskText = addTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.classList.add('taskItem');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="deleteTaskButton">Видалити</button>
            `;
            taskList.appendChild(taskItem);
            addTaskInput.value = '';

            saveTasks();
        }
    }

    function removeTask(event) {
        if (event.target.classList.contains('deleteTaskButton')) {
            event.target.parentElement.remove();

            saveTasks();
        }
    }

    function markTaskAsDone(event) {
        if (event.target.tagName === 'SPAN') {
            event.target.classList.toggle('done');

            saveTasks();
        }
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('.taskItem').forEach(taskItem => {
            tasks.push({
                text: taskItem.querySelector('span').innerText,
                done: taskItem.querySelector('span').classList.contains('done')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('taskItem');
            taskItem.innerHTML = `
                <span class="${task.done ? 'done' : ''}">${task.text}</span>
                <button class="deleteTaskButton">Видалити</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    addTaskButton.addEventListener('click', addTask);

    taskList.addEventListener('click', function(event) {
        removeTask(event);
        markTaskAsDone(event);
    });

    loadTasks();
});
