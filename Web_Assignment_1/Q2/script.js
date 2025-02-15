document.addEventListener("DOMContentLoaded", () => {
    let tasks = [];
    const taskNameInput = document.getElementById("taskname");
    const priorityInput = document.getElementById("priority");
    const addTaskBtn = document.getElementById("addTask");
    const searchTaskInput = document.getElementById("searchTask");
    const filterPriority = document.getElementById("filter");
    const taskCountInput = document.getElementById("taskCount");
    const taskListInput = document.getElementById("taskList");
    const completedTask = document.getElementById("completedtasks"); 
    const darkModeToggle = document.getElementById("darkModeToggle");

    addTaskBtn.addEventListener("click", () => {
        const taskName = taskNameInput.value.trim();
        const priority = priorityInput.value;
        if (taskName) {
            tasks.push({ name: taskName, priority, completed: false });
            taskNameInput.value = "";
            renderTasks();
        }
    });
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("complete-btn")) {
            const index = e.target.dataset.index;
            tasks[index].completed = true;
            renderTasks();
        }

        if (e.target.classList.contains("delete-btn")) {
            const index = e.target.dataset.index;
            tasks.splice(index, 1);
            renderTasks();
        }
    });
    searchTaskInput.addEventListener("input", renderTasks);
    filterPriority.addEventListener("change", renderTasks);


    darkModeToggle.addEventListener("click", () =>
        document.body.classList.toggle("darkMode")
    );

    function renderTasks() {
        taskListInput.innerHTML = "";
        completedTask.innerHTML = "";

        const filteredTasks = tasks.filter((task) => {
            const matchesSearch = task.name
                .toLowerCase()
                .includes(searchTaskInput.value.toLowerCase());
            const matchesPriority =
                filterPriority.value === "all" || task.priority === filterPriority.value;
            return matchesSearch && matchesPriority;
        });

        filteredTasks.forEach((task, index) => {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task", task.priority.toLowerCase());
            taskElement.innerHTML = `
                <span>${task.name} (${task.priority})</span>
                <div>
                    <button class="complete-btn" data-index="${index}">Complete</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            `;

            if (task.completed) {
                taskElement.classList.add("completed-task");
                completedTask.appendChild(taskElement);
            } else {
                taskListInput.appendChild(taskElement);
            }
        });

        const incompleteTasks = tasks.filter(task => !task.completed).length;
        taskCountInput.textContent = incompleteTasks;
    }

    renderTasks();
});
