class Triangle {
    constructor(_a, _b, _c) {
        this.a = _a;
        this.b = _b;
        this.c = _c;
    };

    check() {
        if (this.a === this.b && this.a === this.c) {
            return `The triangle with sides ${this.a}, ${this.b} and ${this.c} is equilateral`
        }
        else if (this.a === this.b || this.a === this.c || this.b === this.c) {
            return `The triangle with sides ${this.a}, ${this.b} and ${this.c} is isoscales`
        }
        else {
            return `The triangle with sides ${this.a}, ${this.b} and ${this.c} is scalene`
        }
    };
    getPerimeter() {
        return this.a + this.b + this.c
    }
}

const triangleFirst = new Triangle(2, 5, 5)
console.log(triangleFirst)
console.log(triangleFirst.check())
console.log(triangleFirst.getPerimeter())