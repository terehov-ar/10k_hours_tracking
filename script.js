const button = document.getElementById("todoListButton");
const textArray = [];

button.addEventListener("click", () => {
    let inputElement = document.getElementById("textInput");
    const taskInput = inputElement.value;
    let listItem;

    if (taskInput === "") {
        return;
    }
    else {
        listItem = document.createElement("li");
        const text = document.createTextNode(taskInput);
        listItem.append(text); 
        const today = new Date(); 
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const uuid = self.crypto.randomUUID();
        const textObject = {
            id: uuid,
            text: taskInput,
            createdAt: date + " : " + time,
        };
        textArray.push(textObject);
        inputElement.value = '';
    }
    if (!listItem) {
        return;
    }
    const list = document.getElementById("listOfTodos");
    list.append(listItem);

});
