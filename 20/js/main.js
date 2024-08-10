// Exercise I:

// movie skeleton
{/* <div class="movie">
  <img src="img" />
  <h2>Frozen</h2>
  <p>drama, fantasy</p>
  <p>2019</p>
</div> */}

// all selectors
let homePage = document.getElementById("homePage"),
      loginPage = document.getElementById("loginPage"),
      movieDetailsPage = document.getElementById("movieDetails"),
      username = document.getElementById("email"),
      password = document.getElementById("password"),
      loginForm = document.getElementById("loginForm"),
      logoutBtn = document.querySelector(".logout-btn"),
      logo = document.querySelector(".logo"),
      searchForm = document.querySelector(".search-form"),
      searchInput = document.getElementById("search");


// login section
const onLoginHandler = (event) => {
  event.preventDefault();
  const userName = username.value.trim();
  const userPassword = password.value.trim();
  debugger
  if (userName !== "" && userPassword !== "") {
    localStorage.setItem("isLogged", "true")
    localStorage.setItem("userName", userName)
    location.hash = "#home" 
  }
}

const onLogoutHandler = () => {
  localStorage.clear();
  location.hash = "#login"
}

loginForm.addEventListener("submit", onLoginHandler)
logoutBtn.addEventListener("click", onLogoutHandler)

const createMovieCard = (movieObj) => `<div class="movie" id=${movieObj.id}>
    <img src=${movieObj.image} />
    <h2>${movieObj.title}</h2>
    <p>${movieObj.genre.join(", ")}</p>
    <p>${movieObj.year}</p>
    </div>`

  const checkMovieDetails = (event) => {
    let movieId = +event.target.getAttribute("id");
    if (movieId === undefined || movieId === 0) {
      movieId = +event.target.parentNode.getAttribute("id")
    }
    // console.log("Movie id: ", movieId)
    location.hash = `#moviedetails/${movieId}`
  }

  const getMovieDetails = (id) => {
    const movieElement = movieList.find(el => el.id === id)
    movieDetailsPage.innerHTML = ""
    movieDetailsPage.innerHTML = createMovieCard(movieElement)
    document.getElementById("search").value = ''
  }

const renderMovies = (parentNode, movieInput)  => {
  parentNode.innerHTML = "";
  location.hash = "#home"
  if (movieInput.length === 0) {
    parentNode.innerHTML = `<h2>No data found</h2>`
  } 
  movieInput.forEach((movie) => {
    parentNode.innerHTML += createMovieCard(movie);
  })
  // vo ovoj momemt sme sigorni dela DOM elementite se napraveni i pokazani na DOM
  setTimeout(() => {
    const allMovies = document.querySelectorAll(".movie")
    allMovies.forEach(el => el.addEventListener("click", checkMovieDetails))
  }, 500)
}

const moviePage = () => renderMovies(homePage, movieList)

// 201 - se sodzi vo 2019 - ne e dobar nacin za proverka na numericki vrednosti
// zanumercki vrednosti sakam da proveram celobrojnost, dali vazi stroga ednakvost 

// search movies
const onSearchHandler = () => {
  const searchValue = searchInput.value.trim();
  // console.log(searchValue)
  //  titles, years and genres
  const filteredMovies = movieList.filter(el =>
    el.title.toLowerCase().includes(searchValue) ||
    el.year === parseInt(searchValue) ||
    el.genre.join(", ").toLowerCase().includes(searchValue)
  );
  renderMovies(homePage, filteredMovies)
}


// sakame inicialno da proverime na koja ruta sum
// i dali korisnikot e logiran, isLogged = true vo localstorage
const onRouteChange = () => {
  let hash = location.hash; // ""
  let movieId;
  // da proveram i odlucam sto ke pravime vo slucaj koga ne sum logiran
  const isLogged = localStorage.getItem("isLogged");
  if (!isLogged) {
    hash = "#login";
    // location.hash = "#login";
  }	
  // debugger
  const isDetailsPage = hash.includes("#moviedetails");
  if (isDetailsPage) {
    hash = "#moviedetails"
    movieId = +location.hash.split("/")[1]
  }
  console.log("I'm on route:", hash);

  // ova e isto kako if/else
  switch (hash) {
    // home page - by dafult, home hash is ""
    case "#home":
        loginPage.style.display = "none";
        homePage.style.display = "block";
        movieDetailsPage.style.display = "none";
        logoutBtn.style.display = "block";
        searchForm.style.display = "block";
        // f-ja za render na site filmovi
        moviePage();
      break;

    // login/logout page
    case "#login":
       loginPage.style.display = "block";
       homePage.style.display = "none";
       movieDetailsPage.style.display = "none";
       logoutBtn.style.display = "none";
       searchForm.style.display = "none";
     break;
    // movie details page
    case "#moviedetails":
        loginPage.style.display = "none";
        homePage.style.display = "none";
        movieDetailsPage.style.display = "block";
        logoutBtn.style.display = "block";
        searchForm.style.display = "none";
        getMovieDetails(movieId)
      break;
    default: 
      location.hash = "#home"
      break;
  }
}
// ova se inicialni akcii
window.addEventListener('hashchange', onRouteChange); // za manuelno menuvanje ruta, url
window.addEventListener('load', onRouteChange); // za refresh
searchInput.addEventListener("keyup", onSearchHandler)
if (logo !== undefined) {
  logo.addEventListener("click", moviePage)
}

