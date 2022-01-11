const button = document.getElementById("todoListButton");

button.addEventListener("click", () => {
    const taskInput = document.getElementById("textInput").value;
    let listItem;

    if (taskInput === "") {
        return;
    }
    else {
        listItem = document.createElement("li");
        const text = document.createTextNode(taskInput);
        listItem.appendChild(text);
    }
    if (!listItem) {
        return;
    }
    const list = document.getElementById("listOfTodos");
    list.appendChild(listItem);

});
