// incialno, za test ke loadame data preku click

const getImages = (pageNum) => fetch(`https://reqres.in/api/users?page=${pageNum}`);

// setTimeout(() => {
//     setTimeout(() => {
//         console.log('inner process')
//     }, [1500]);
// }, [1000])

const createTableRow = (data) => `<tr>
    <th>${data.id}</th>
    <th>${data.first_name}</th>
    <th>${data.last_name}</th>
    <th><img src="${data.avatar}"</th>
</tr>`

const paginationPage = (event) => {
    console.log('pagination...')
    const pageNum = event.target.id;
    getImages(pageNum)
        .then(res => res.json())
        .then(data => createImage(data))
        .catch(err => console.log(err))
}

const createImage = (res) => {
    const pages = res.total_pages;
    // paginacija
    const paginationSection = document.querySelector('.pagination')
    paginationSection.innerHTML = '';
    for (let i = 0; i < pages; i++) {
        paginationSection.innerHTML += `<span id=${i + 1} style="margin-right:5px">${i + 1}</span>`
    }
    // kreiranje na tr elementi
    const tblNode = document.querySelector("table")
    tblNode.innerHTML = ''
    res.data.forEach(el => tblNode.innerHTML += createTableRow(el))
    const spans = document.querySelectorAll(".pagination span")
    spans.forEach(el => el.addEventListener("click", paginationPage))
}

const checkErrorResponse = (data) => {
    const tblNode = document.querySelector("table")
    if (data.data == undefined) {
        tblNode.innerHTML = ''
        tblNode.innerHTML = '<h2>No data found</h2>'
        return;
    }
    else {
        createImage(data)
    }
    return data
}

const loadData = () => {
    // f-ja sto povikuv api
    getImages()
        .then(data => data.json())
        .then(res => {
            console.log(res)
            // check err function
            checkErrorResponse(res)
            // createImage(res)
            // return res
        })
        .catch(err => console.log(err))
}

// document.getElementById('btn').addEventListener('click', loadData);
window.addEventListener('load', loadData)
