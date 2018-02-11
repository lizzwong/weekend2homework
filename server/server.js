const express = require('express');
const app = express();

app.use(express.static('server/public'));

const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded( { extend: true } ));

const mathRouter = require('./router/mathRouter');
app.use('/maths',mathRouter);




const port = 8888;
app.listen(port,function(){
    console.log(`Listening on port ${port}`);
    
});