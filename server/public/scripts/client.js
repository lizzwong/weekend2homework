$(document).ready(onReady);

function onReady() {

    $('#submitMath').on('click',function(event){
    event.preventDefault();
    addEquation();
    // console.log('way to click a button');
    
})
    getAllEquations();  
    
}

function getAllEquations (){
    $.ajax ({
        type : 'get',
        url : '/maths'
    }).done(function(response){
    //request was successful
        console.log('woo way to go');
        displayEquations(response);
        currentEquation(response);
    }).fail(function(response){
    //no connection from server
        console.log('nope, try again');
    
    });
}

function displayEquations(equations){
    $('.mathHistory').empty();
    let $ul = $('<ul></ul>');
    for (let equation of equations) {
        $ul.append(`<li>
        ${equation.valueOfX}  ${equation.arithmetic}  ${equation.valueOfY} = ${equation.sum}
        </li>`);
    }
    $('.mathHistory').append($ul);
}//function to display equation array on DOM

function currentEquation(equations) {
    let equation = equations[equations.length-1]
    $('#current').empty();
        $('#current').append(`<div>
        ${equation.valueOfX}  ${equation.arithmetic}  ${equation.valueOfY} = ${equation.sum}
        </div>`)
}//display current equation on the DOM

function addEquation() {
    let newEquation = getEquation();
    // console.log('add equation');
    
    $.ajax({
        type: 'post',
        url: '/maths/add',
        data: { equation: newEquation },
    }).done(function(response){
        console.log('added');
        getAllEquations();
    }).fail(function(error){
        console.log('try again');
        
    });
}



function getEquation() {
    let valueOfX = $('#x').val();
    let arithmetic = $('#mathType').val();
    let valueOfY = $('#y').val();
        let equation = {
            valueOfX : valueOfX,
            arithmetic : arithmetic,
            valueOfY : valueOfY
        }
    // console.log(equation);
    return equation;
    
}//gets equation information off of DOM