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
        }
    }

    function removeTask(event) {
        if (event.target.classList.contains('deleteTaskButton')) {
            event.target.parentElement.remove();
        }
    }
    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);
});
