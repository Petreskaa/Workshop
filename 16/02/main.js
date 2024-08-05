function Developer(_fullName, _age, _experience, _workPosition) {

    this.fullName = _fullName;
    this.experience = _experience;
    this.workPosition = _workPosition;
    this.age = _age;
    //
    this.getSeniority = function () { 
        if (this.experience >= 0 && this.experience <= 1) {
            return 'Junior'
        }
        else if (this.experience > 1 && this.experience <= 3) {
            return 'Medior'
        }
        else {
            return 'Senior'
        }
    },
    this.display = function() {
        return `I'm, ${this.fullName}, ${this.age} old and I'm working as ${this.workPosition} developer`
    }
}

const userFullName = "John Doe"
const userExperience = 2;
const userAge = 30;
const userPosition = "Full-stack"

const devOne = new Developer(userFullName, userAge, userExperience, userPosition);
console.log(devOne);
console.log(devOne.getSeniority())
console.log(devOne.display())