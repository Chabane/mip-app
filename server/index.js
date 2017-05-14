'use strict';

const express = require('express');
const path = require('path');
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/api');

require('./mip/');

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.info('MIP App listening on port ' + app.get('port'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan('dev'));
app.use('/api', api);

module.exports = app;

