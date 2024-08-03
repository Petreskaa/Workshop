const helperNode = document.getElementById("help")
const nameNode = document.getElementById("name")
const ageNode = document.getElementById("age")

const onFocusHandler = (event) => {
    // get data-helper properties
    const dataHelper = event.target.getAttribute("data-help")
    console.log(dataHelper)
    helperNode.innerText = dataHelper;
}

const onBlurHandler = () => {
    helperNode.innerText = ""
}

nameNode.addEventListener("focus", onFocusHandler)
ageNode.addEventListener("focus", onFocusHandler)
nameNode.addEventListener("blur", onBlurHandler)
ageNode.addEventListener("blur", onBlurHandler)
