/*jshint node:true*/
'use strict';
var express = require('express');
var app = express();
var request = require('superagent');

app.get('/current/:city', function (req, res) {
    var wunderUrl = 'http://api.wunderground.com/api/' +
    process.env.WUNDERAPI +
    '/conditions/q/WA/' +
    req.params.city +
    '.json';

    request
    .get(wunderUrl)
    .end(function (err, wunderData) {
        var parsedData = JSON.parse(wunderData.text);
        res.json({temp: parsedData.current_observation.temp_f});
    });
});

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  var host = process.env.IP;
  var port = server.address().port;
  console.log('wunderground proxy server listening at http://%s:%s', host, port); 
});