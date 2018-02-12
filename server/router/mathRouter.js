const express = require('express');
const router = express.Router();

const equationModule = require('../mathModules/equations');
router.get('/',function(request,response) {
    let equations = equationModule.getAllEquations();
    console.log('arrayOfEquations', equations);
    response.send(equations);
});//sending array of equations 

const mathsModule = require('../mathModules/arithmetics');
router.get('/usemath', function(request, response) {
    let mathematics = mathsModule.mathematics();
    console.log('getting maths');
    response.send(mathematics);
});//send math function

router.post('/operations', function(request,response){
    let equation = request.body.equation;
    console.log('hey lets math');
    mathsModule.mathematics(equation);
    response.sendStatus(200);
})

router.post('/add', function(request,response){
    let equation = request.body.equation;
    console.log(equation, 'hi!!');
    equationModule.addEquation(equation);
    response.sendStatus(200);
});//taking in input from DOM
    


module.exports = router;