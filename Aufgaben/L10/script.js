let input = document.querySelector(".tasksEingabe");
input.addEventListener("keydown", function (event) {
    if (event.key == "enter") {
        addTask();
        input.value = ""; // Problem beim ausführen vom Befehl!!!
    }
});
function addTask() {
    let div = document.createElement("div");
    div.className = "taskbar";
    let label = document.createElement("label");
    label.innerHTML = input.value;
    div.append("taskbar");
    label.append(input.value);
}
function removeTask() {
    // Problem!
}
//# sourceMappingURL=script.js.map