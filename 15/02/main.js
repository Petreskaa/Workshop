const toggleBtn = document.getElementById('toggler');
const input = document.querySelector('input');
const list = document.querySelector("ul")
const li = document.querySelectorAll("li");
const trash = document.querySelectorAll(".fa-trash");

const onToggleHandler = () => {
    input.classList.toggle("hideInput");

    if (toggleBtn.classList.contains("fa-toggle-on")) {
        toggleBtn.classList.remove("fa-toggle-on")
        toggleBtn.classList.add("fa-toggle-off")
    }
}

toggleBtn.addEventListener("click", onToggleHandler)


const createListElement = (inputValue) => `<li class="el">
                                            <span class="trash"><i class="fa fa-trash"></i></span> ${inputValue}
                                          </li>`

const resetInputValue = (inputElement) => inputElement.value = ""                                         

const onKeyUpHandler = (event) => {
    console.log("key code:", event.keyCode); 
    let inputValCpy = input.value;

    if (event.keyCode === 13 && inputValCpy.trim().length > 0) {
        console.log("value to be saved:", inputValCpy);
        list.innerHTML += createListElement(inputValCpy)

        resetInputValue(input)
    }
    else if (event.keyCode === 13) {
        resetInputValue(input)
    }
}

input.addEventListener("keyup", onKeyUpHandler)


const onClickDocumentHandler = (event) => {

    console.log(event.target)
    if (event.target.classList.contains("el")) {
        event.target.classList.toggle("completed")
    }
    if (event.target.classList.contains("trash")) {
        event.target.parentElement.remove();
    }
}

document.addEventListener("click", onClickDocumentHandler)
