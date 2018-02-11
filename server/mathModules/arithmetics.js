function mathematics( valueOfX, arithmetic, valueOfY ){

    let x = parseInt( valueOfX );
    let y = parseInt( valueOfY );
    
    if (arithmetic == '+'){
        console.log( x, '+', y );
        return x+y;
    }

    else if (arithmetic == '-'){
        console.log( x, '-', y);
        return x-y;
    }

    else if (arithmetic == 'x'){
        console.log( x, 'x', y);
        return x*y;
    }

    else {
        console.log( x, '÷', y);
        return x/y
    }
 }

 let totalSum = mathematics();

 module.exports = totalSum;