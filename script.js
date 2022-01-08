const button = document.getElementById('todoListButton');

button.addEventListener("click", () => {
    let taskInput = document.getElementById('textInput').value;

    if (taskInput === '') {
        
    } else {
        var listItem = document.createElement("li");
        let text = document.createTextNode(taskInput);
        listItem.appendChild(text);
    }


    let list = document.getElementById("listTodo");
    list.appendChild(listItem);

});

