class Specialities {
    constructor(_img, _title, _desc) {
        this.img = _img;
        this.title = _title;
        this.desc = _desc;
    }
}

class Features extends Specialities {
    constructor(_img, _title, _stars, _icon) {
        super(_img, _title, undefined);
        this.stars = _stars;
        this.icon = _icon;
    }
}

class FoodCard extends Specialities {
    constructor(_title, _desc, _price) {
        super(undefined, _title, _desc);
        this.price = _price;
    }
}

const createSpecialities = (specData) => `<div class="col-4">
        <div class="bordered">
            <img src="./img/${specData.img}" class="mb-3" />
                <h4>${specData.title}</h4>
                <p>${specData.desc}</p>
        </div>
    </div>`

speciealitiesData.forEach(el => {
    const speciealitiesObj = new Specialities(el.img, el.title, el.desc);
    document.querySelector(".specialities").innerHTML += createSpecialities(speciealitiesObj)
});



const createStars = (numStars) => {
    const starArr = []
    for (let i = 0; i < numStars; i++) {
        starArr.push('<i class="fa fa-star" aria-hidden="true"></i>')
    }

    return starArr;
}


const createFeatures = (featureData) => `<div class="col-3">
<div class="row featuredd">
  <div class="col-12">
    <img class="img-fluid" src="./img/${featureData.img}" />
    <div class="row mt-3 align-items-start">
      <div class="col-8">
        <h4>${featureData.title}</h4>
        <div class="stars">
          ${createStars(featureData.stars).join("")}
          <p>${featureData.stars}</p>
        </div>
      </div>
      <div class="col-4">
        <button class="btn btn-block order">${featureData.icon}</button>
      </div>
    </div>
  </div>
</div>
</div>`

featuresData.forEach(el => {
    const featureObj = new Features(el.img, el.title, el.stars, el.icon);
    document.querySelector(".featured-food").innerHTML += createFeatures(featureObj)
});

const createFoodCard = (foodObj) => `<div class="row">
<div class="col-12">
  <div class="row">
    <div class="col-8">
      <h3>${foodObj.title}</h3>
    </div>
    <div class="col-4 text-right">
      <h3>${foodObj.price}</h3>
    </div>
  </div>
  <p>${foodObj.desc}</p>
</div>
</div>`

const breakfactCards = [];
const lunchCards = [];
const dinnerCards = [];

foodCardData.forEach(el => {
    const foodCardObj = new FoodCard(el.title, el.desc, el.price)
    breakfactCards.push(foodCardObj);
    document.querySelector(".breakfast").innerHTML += createFoodCard(foodCardObj)
    document.querySelector(".lunch").innerHTML += createFoodCard(foodCardObj)
    document.querySelector(".dinner").innerHTML += createFoodCard(foodCardObj)
});
