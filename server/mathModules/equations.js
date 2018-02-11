const Equation = require('./equation-class');

const arrayOfEquations = [
    new Equation('X', '+', 'Y', ''),
    new Equation('X', '-', 'Y', ''),
    new Equation('X', 'x', 'Y', ''),
    new Equation('X', '÷', 'Y', '')   
]

function addEq(equation) {
    arrayOfEquations.push(equation);
}

function getAll(){
    return arrayOfEquations;
}

module.exports = {
    addEquation : addEq,
    getAllEquations : getAll
}