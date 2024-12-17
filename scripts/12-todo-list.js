const todoList = [{name:'make dinner', date: '2024-12-15'}, {name: 'wash dishes', date: '2024-12-16'}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';
    
    todoList.forEach(function(todoObject, index){
        const {name, date} = todoObject;
        const html = `
        <div>${name}</div> <div>${date}</div>
        <button onclick="
            todoList.splice(${index},1);
            renderTodoList();
        "class="delete-todo-button">Delete</button>`;
        todoListHTML += html;
    });
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const inputDate = document.querySelector('.js-date-input');
    const name = inputElement.value;
    const date = inputDate.value;
    todoList.push({name, date});
    inputElement.value = '';
    inputDate.value = '';
    renderTodoList();
}