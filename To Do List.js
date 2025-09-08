const todoInput = document.getElementById('taskInput');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById9('todo-list')
addBtn.addEventListener('click' , () =>{
    const taskText = todoInput.ariaValueMax.trim();
    console.log(taskText);
    if (taskText ! == ' '){
        const newListItem = document.createElement('');
        newListItem.textContent = Document.createElement(li);
        newListItem.textContent = taskText;
        todoList.appendChild(newListItem);
        todoInput.value = ' ';
    }
})