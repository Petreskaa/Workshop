function Car(_model, yearInput, milageInput, ownerInput) {
    this.model = _model;
    this.year = yearInput; 
    this.milage = milageInput;
    this.owner = ownerInput;
    this.getInfo = function() { 
        return `${this.model}, ${this.year} ${this.milage}km, owned by ${this.owner}`;
    };

    this.getKm = function() { 
        if (this.milage <= 10000) {
            return 'This is great car'
        }
        else if (this.milage > 10000 && this.milage <= 250000) {
            return 'this is a good car'
        }
        else {
            return 'This is an old car';
        }
    };

    this.setOwner = function(_owner) {
        if (_owner != undefined) {
            this.owner = _owner.trim();
        }
        else {
            this.owner = "-default owner-"
        }
    }
}
   

const carModel = "Renault"
const carYear = 2011;
const carMilage = 150000;
const carOwner = "Mike Smith"
const carObj = new Car(carModel, carYear, carMilage, carOwner)
console.log(carObj)
console.log(carObj.getInfo())
carObj.setOwner(" John Doe     ")
console.log(carObj.getInfo())


