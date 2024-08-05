const developer = {
    fullName: '',
    age: 0, 
    experience: 0,
    workPosition: '',
    getSeniority: function () {
       
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
    display: function() {
        return `I'm, ${this.fullName}, ${this.age} old and I'm working as ${this.workPosition} developer`
    }
};

developer.fullName = "Mike Smith";
developer.age = 22;
developer.experience = 2;
developer.workPosition = "Front-end";

console.log(developer);
console.log(developer.getSeniority());
console.log(developer.display())