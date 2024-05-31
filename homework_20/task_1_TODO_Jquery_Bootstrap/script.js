$(document).ready(function() {
    const taskList = $('#taskList');
    const addTaskInput = $('#addTaskInput');
    const addTaskButton = $('#addTaskButton');

    function addTask() {
        const taskText = addTaskInput.val().trim();
        if (taskText !== '') {
            const taskItem = $(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="task-text">${taskText}</span>
                    <button class="btn btn-danger btn-sm deleteTaskButton">Видалити</button>
                </li>
            `);
            taskList.append(taskItem);
            addTaskInput.val('');

            saveTasks();
        }
    }

    function removeTask(event) {
        const button = $(event.target);
        if (button.hasClass('deleteTaskButton')) {
            button.closest('li').remove();

            saveTasks();
        }
    }

    function showTaskModal(event) {
        const target = $(event.target);
        if (target.hasClass('task-text')) {
            const taskText = target.text();
            $('#taskText').text(taskText);
            $('#taskModal').modal('show');
        }
    }

    function saveTasks() {
        const tasks = [];
        taskList.find('.list-group-item').each(function() {
            const taskItem = $(this);
            tasks.push({
                text: taskItem.find('.task-text').text()
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const taskItem = $(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="task-text">${task.text}</span>
                    <button class="btn btn-danger btn-sm deleteTaskButton">Видалити</button>
                </li>
            `);
            taskList.append(taskItem);
        });
    }

    addTaskButton.click(addTask);

    taskList.on('click', '.deleteTaskButton', removeTask);

    taskList.on('click', '.task-text', showTaskModal);

    loadTasks();
});
