window.addEventListener("load", function (): void {

let input: HTMLInputElement = document.querySelector("#tasksEingabe");
let div: HTMLDivElement = document.querySelector("taskbar");
let task: string = input.value;

input.addEventListener("keypress", function (event: KeyboardEvent): void {
    if (event.key == "enter") {
         addTask();
         input.value = ""; 
    }
});

function addTask(): void {
    let item: HTMLDivElement = document.createElement("div");
    item.className = "taskbar";
    let label: HTMLLabelElement = document.createElement("label");
    label.className = "taskbar";
    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    label.append(checkbox, task);
    item.append(label);
    div.append(item);
} 
function removeTask(): void {
    div.remove();
    
}
});

