/*jshint node:true*/
'use strict';
var express = require('express');
var app = express();
var request = require('superagent');

app.get('/', function (req, res) {
    var wunderUrl = 'http://api.wunderground.com/api/' +
    process.env.WUNDERAPI +
    '/conditions/q/WA/' +
    'Seattle' +
    '.json';

    request
    .get(wunderUrl)
    .end(function (err, wunderData) {
        var parsedData = JSON.parse(wunderData.text);
        res.json({temp: parsedData.current_observation.temp_f});
    });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});
