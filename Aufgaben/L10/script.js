window.addEventListener("load", function () {
    let input = document.querySelector("#tasksEingabe");
    let div = document.querySelector("taskbar");
    let task = input.value;
    input.addEventListener("keypress", function (event) {
        if (event.key == "enter") {
            addTask();
            input.value = "";
        }
    });
    function addTask() {
        let item = document.createElement("div");
        item.className = "taskbar";
        let label = document.createElement("label");
        label.className = "taskbar";
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        label.append(checkbox, task);
        item.append(label);
        div.append(item);
    }
});
//# sourceMappingURL=script.js.map