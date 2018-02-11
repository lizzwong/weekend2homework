const express = require('express');
const router = express.Router();

const equationModule = require('../mathModules/equations');
router.get('/',function(request,response) {
    let equations = equationModule.getAllEquations();
    console.log('arrayOfEquations', equations);
    response.send(equations);
});

router.post('/add', function(request,response){
    let equation = request.body.equation;
    console.log(equation);
    equationModule.addEquation(equation);
    response.sendStatus(200);
});
    


module.exports = router;