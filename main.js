const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        addItem();
    }
})



function addItem() {
    let parentElement = document.createElement("div");
    let childElement = document.createElement("div");
    let checkIcon = document.createElement("i");
    let trashIcon = document.createElement("i");

    parentElement.className = "item";
    parentElement.innerHTML = '<div>' + input.value + '</div>';

    checkIcon.className = "fa-solid fa-circle-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function () {
        checkIcon.style.color = "black";
    })


    childElement.appendChild(checkIcon);

    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "black";
    trashIcon.addEventListener("click", function () {
        parentElement.remove();
    })

    childElement.appendChild(trashIcon);

    parentElement.appendChild(childElement);

    toDoItems.appendChild(parentElement);

    input.value = '';
}