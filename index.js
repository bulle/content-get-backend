 // import { getDateDifference } from './date_utils/date_math.js';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/api.routes.js')(app);
var dateMath = require('./date_utils/date_math.js');

/* var date1 = new Date(2019,2,3);
var date2 = new Date(2020,2,3);
var date3 = new Date(2020,4,3);
var date4 = new Date(2021,3,3);
var date5 = new Date(2020,2,5);
var date6 = new Date(2020,12,12);
var date7 = new Date(2018,5,3);
var date8 = new Date(2022,10,3);

console.log(date1.getTime());
console.log(date2.getTime());
console.log(date3.getTime());
console.log(date4.getTime());
console.log(date5.getTime());
console.log(date6.getTime());
console.log(date7.getTime());
console.log(date8.getTime());
 */

app.listen(3000, (req,res) => {
    console.log('listening on 3000');
  });