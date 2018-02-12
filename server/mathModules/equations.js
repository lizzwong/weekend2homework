const Equation = require('./equation-class');
const mathFinals = require('./arithmetics');

let sumOfTotals = mathFinals.arrayOfSums;
let totalMath = mathFinals.mathematics;


const arrayOfEquations = [
    new Equation('X', '+', 'Y', 'A'),
    new Equation('X', '-', 'Y', 'B'),
    new Equation('X', 'x', 'Y', 'C'),
    new Equation('X', '÷', 'Y', 'D')   
]

function addEq(equation) {
    arrayOfEquations.push(equation);
}//add equation to the array of equations for the dom

function getAll(){
    return arrayOfEquations;
}//return all equations

function clearAll(){
    arrayOfEquations().clearAll;
}

module.exports = {
    addEquation : addEq,
    getAllEquations : getAll,
    sumOfTotals : sumOfTotals,
    totalMath : totalMath,
    clearAll : clearAll
}