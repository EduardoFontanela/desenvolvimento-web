const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    
    if (text !== '') {
        const li = document.createElement('li');
        
        const checkSpan = document.createElement('span');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkSpan.appendChild(checkbox);
        
        const textSpan = document.createElement('span');
        textSpan.textContent = text;
        textSpan.className = 'task-text';
        
        li.appendChild(checkSpan);
        li.appendChild(textSpan);
        
        taskList.appendChild(li);
        
        taskInput.value = '';
        taskInput.focus();
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.type === 'checkbox') {
        const li = event.target.closest('li');
        li.classList.toggle('completed');
        return;
    }
    
    const li = event.target.closest('li');
    if (li) {
        li.remove();
    }
});