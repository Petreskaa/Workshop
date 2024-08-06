const car = {
    engine: "petrol",
    fractionPower: 10,
    power: 0,
    serviceList: [],
    historyService: {
        dealership: "Renault",
        origin: "France",
        yearMnf: 2015
    },
    setOrigin: function(_origin) {
        this.historyService.origin = _origin;
    },
    setPower: function(_power) {
        this.power = _power + this.fractionPower;
    }
}

const origininput = "Germany"
const powerInput = 110;
car.setPower(powerInput)
console.log(car);


const carCpy = car 
carCpy.setPower(200)
carCpy.setOrigin(origininput)
console.log(carCpy)
console.log(carCpy.historyService.origin, car.historyService.origin)
console.log(carCpy.power, car.power)
