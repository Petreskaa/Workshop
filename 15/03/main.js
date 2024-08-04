const posts = [
    {
        img: 1,
        title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        desc:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        img: 2,
        title: "qui est esse",
        desc:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        img: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        desc:
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
        img: 4,
        title: "eum et est occaecati",
        desc:
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
        img: 5,
        title: "nesciunt quas odio",
        desc:
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
        img: 6,
        title: "dolorem eum magni eos aperiam quia",
        desc:
        "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
        img: 7,
        title: "magnam facilis autem",
        desc:
        "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
    {
        img: 8,
        title: "dolorem dolore est ipsam",
        desc:
        "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
        img: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        desc:
        "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    },
    {
        img: 10,
        title: "optio molestias id quia eum",
        desc:
        "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    },
    {
        img: 11,
        title: "et ea vero quia laudantium autem",
        desc:
        "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    },
    {
        img: 12,
        title: "in quibusdam tempore odit est dolorem",
        desc:
        "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    },
    ];
    
    const createCard = (cardObject, elIndex) => `<div class="col-4 item">
                                                    <a href="google.com" class="link">
                                                    <div class="img-content">
                                                    <img src="img/${cardObject.img}.jpg">
                                                    <button class="heart">
                                                     <i id=${elIndex} class="fa fa-heart"></i>
                                                    </button>
                                                </div>
                                                <div class="item-content">
                                                    <h2 class="title">${cardObject.title}</h2>
                                                    <p class="paragraf">${cardObject.desc}</p>
                                                </div>
                                                </a>
                                            </div>`
    
    const listNode = document.getElementById('list')
    posts.forEach((el, key) => listNode.innerHTML += createCard(el, key))
    
    const btnEl = document.querySelectorAll(".heart")
    
    const onBtnClick = (event) => {
        console.log("click event")
        const elementId = event.target.getAttribute("id")
        const heartElement = document.getElementById(elementId)
        heartElement.classList.toggle("colored")
        let favNumber = document.querySelectorAll(".fa-heart.colored").length;
        document.querySelector(".fav-count").textContent = favNumber;
        document.querySelector(".fav-heart").classList.toggle("colored", favNumber > 0)
        
    }
    
    btnEl.forEach(el => {
        el.addEventListener("click", (event) => {
            event.preventDefault();
            onBtnClick(event)
        })
    })
    