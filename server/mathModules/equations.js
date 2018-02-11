const Equation = require('./equation-class');

const arrayOfEquations = [
 new Equation('X', 'add', 'Y'),
 new Equation('X', 'subtract', 'Y'),
 new Equation('X', 'multiply', 'Y'),
 new Equation('X', 'divide', 'Y')   
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