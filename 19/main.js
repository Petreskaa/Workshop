class Product {
    constructor(_id, _img, _title, _desc) {
        this.id = _id;
        this.title = _title;
        this.desc = _desc;
        this.img = _img;
    }
}

const prodList = [];


products.forEach(el => {
    const prodObj = new Product(el.id, el.img, el.title, el.desc);
    prodList.push(prodObj)
})

console.log(prodList)

const list = document.getElementById("list") 

const renderCard = (inputObj) => `<div class="col-4 mb-5" id=${inputObj.id}>
    <a href="google.com" class="link d-flex flex-column">
        <img
            src=${inputObj.img}
            class="img-fluid"
        />
        <div class="item-content p-3 d-flex flex-column flex-grow-1">
            <h2 class="title">${inputObj.title}</h2>
            <p class="paragraph">${inputObj.desc}</p>
            <button class="btn btn-danger del-btn mt-auto align-self-end">
                Delete
            </button>
        </div>
    </a>
</div>`

const bindElement = (parentNode, elementNode) => parentNode.innerHTML += elementNode;

prodList.forEach(el => {
    const cardElement = renderCard(el);
    bindElement(list, cardElement);
})



const addBtn = document.getElementById("add-product")

const resetInputValues = (inputListElements) => inputListElements.forEach(el => el.value = '') 

const onAddHandler = () => {
    const imgInput = document.getElementById("img");
    const titleInput = document.getElementById("title");
    const descInput = document.getElementById("desc");
    const inputListElements = [imgInput, titleInput, descInput]
    const productInput = new Product(prodList.length + 1, imgInput.value, titleInput.value, descInput.value);
    prodList.push(productInput)
    bindElement(list, renderCard(productInput));
    resetInputValues(inputListElements)
    console.log(prodList)
}

addBtn.addEventListener("click", onAddHandler)



const onDeleteHandler = (event) => {
    event.preventDefault();
    const isDeleteBtn = event.target.classList.contains("del-btn")
    console.log(isDeleteBtn)
    if (isDeleteBtn) {
        const topParentElement = event.target.parentNode.parentNode.parentNode;
        const elementId = topParentElement.id;
        console.log(elementId)
        topParentElement.remove();
        prodList.splice(elementId - 1, 1);
    }
}

list.addEventListener("click", onDeleteHandler)


const searchBtn = document.querySelector(".search-btn")

const onSearchHandler = () => {
    const searchValue = document.querySelector(".search-input").value
    console.log(searchValue)

    const flattenedSearch = searchValue.toLowerCase().trim();
    const filteredProducts = prodList.filter(el => el.title.toLowerCase() === flattenedSearch);
    console.log(filteredProducts)
    if (filteredProducts.length === 0) {
        list.innerHTML = `<h2>No results found for product: ${searchValue}</h2>`
    }
    if (filteredProducts.length > 0) {
        list.innerHTML = ''
        filteredProducts.forEach(el => bindElement(list, renderCard(el)));
    }

    else if (searchValue.trim().length === 0) {
        list.innerHTML = ''
        prodList.forEach(el => bindElement(list, renderCard(el)));
    }
}

searchBtn.addEventListener("click", onSearchHandler)
const searchInputField = document.querySelector(".search-input")

const onKeyUphandler = (event) => {
    console.log(event.target.value)
    const searchInput = event.target.value;
    document.querySelector(".search-btn").disabled = searchInput.trim().length === 0;
}
searchInputField.addEventListener("keyup", onKeyUphandler)
