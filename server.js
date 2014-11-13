/*jshint node:true*/
'use strict';
var express = require('express');
var app = express();
var request = require('superagent');

app.get('/', function (req, res) {
//someone help me!
    var wunderUrl = 'http://api.wunderground.com/api' +
    process.env.WUNDERAPI +
    'conditions/q/WA/' +
    'Seattle' +
    '.json';

    request
    .get(wunderUrl)
    .end(function (err, wunderData) {
        res.json(wunderData);
    });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});
























