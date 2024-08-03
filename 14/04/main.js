const countriesParentNode = document.querySelector(".countries-list")
const inputField = document.querySelector("input")

const createElement = (elementType, elementInput) => {
    const element = document.createElement(elementType)
    element.innerText = elementInput;
    return element;
}

const onLoadHandler = () => {
                                               
    countriesData.forEach(el => countriesParentNode.appendChild(createElement("li", el)));
}

window.addEventListener('load', onLoadHandler)


const onKeyUpHandler = (event) => {
    const currentSearchValue = event.target.value.toLowerCase()

    const filtered = countriesData.filter(el => el.toLowerCase().includes(currentSearchValue))
    countriesParentNode.innerHTML = ''
    filtered.forEach(el => countriesParentNode.appendChild(createElement("li", el)));

}


inputField.addEventListener('keyup', onKeyUpHandler)
