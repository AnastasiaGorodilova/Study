document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Функция для создания новой задачи
    function createTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            li.addEventListener("click", toggleTask); // Добавляем обработчик клика для переключения выполнения задачи
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    // Функция для переключения выполнения задачи
    function toggleTask(event) {
        const element = event.target;
        element.classList.toggle("completed");
        // Если задача выполнена, добавляем обработчик для вычеркивания задачи после двойного клика
        if (element.classList.contains("completed")) {
            element.addEventListener("dblclick", removeTask);
        } else {
            // Если задача не выполнена, удаляем обработчик для вычеркивания задачи
            element.removeEventListener("dblclick", removeTask);
        }
    }

    // Функция для удаления задачи после двойного клика
    function removeTask(event) {
        const element = event.target;
        taskList.removeChild(element);
    }

    // Обработчик клика на кнопку "Добавить"
    addTaskButton.addEventListener("click", createTask);
});