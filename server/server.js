const express = require('express');
const app = express();

app.use(express.static('server/public'));

const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded( {extend: true_} ));