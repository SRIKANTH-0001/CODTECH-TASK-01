let inputs = document.getElementById("Inp");
let text = document.querySelector(".text");

function add() {
    console.log("Add function called");
    if (inputs.value.trim() === "") {
        alert("You are Not Added Anything!");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);
        console.log("New task added");
    }
}

function remove() {
    console.log("Remove function called");
    this.parentElement.remove();
}
