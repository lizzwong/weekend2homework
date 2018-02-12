    function mathematics( valueOfX, arithmetic, valueOfY ){
        console.log('in mathematics!');
        
        let x = parseInt( valueOfX );
        let y = parseInt( valueOfY );
        

        if (arithmetic == '+'){
            console.log( x, '+', y );
            return x + y;
        }

        else if (arithmetic == '-'){
            console.log( x, '-', y);
            return x - y;
        }

        else if (arithmetic == 'x'){
            console.log( x, 'x', y);
            returnx * y;
        }

        else {
            console.log( x, '÷', y);
            return x / y;
        }
        
    }//please give me answers

module.exports = mathematics;