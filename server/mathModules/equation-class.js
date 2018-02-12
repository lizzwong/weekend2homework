const mathFinals = require('./arithmetics');

let totalMath = mathFinals.mathematics;

class Equation {
    constructor (valueOfX, arithmetic, valueOfY, totalMath) {
        this.valueOfX = valueOfX;
        this.arithmetic = arithmetic;
        this.valueOfY = valueOfY;
        this.totalMath = totalMath
    }


}

module.exports = Equation;