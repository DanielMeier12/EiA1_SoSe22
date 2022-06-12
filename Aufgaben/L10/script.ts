let input: HTMLInputElement = document.querySelector(".tasksEingabe");

input.addEventListener("keydown", function (event: KeyboardEvent): void {
    if (event.key == "enter") {
         addTask();
         input.value = ""; // Problem beim ausführen vom Befehl!!!
    }
});    
function addTask(): void {
    let div: HTMLDivElement = document.createElement("div");
    div.className = "taskbar";
    let label: HTMLLabelElement = document.createElement("label");
    label.innerHTML = input.value;
    div.append("taskbar");
    label.append(input.value);

}
function removeTask(): void {
    // Problem!
}


