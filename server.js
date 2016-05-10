//index.js

var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res) {
  // place web scraping magic here
  url = 'http://www.imdb.com/title/tt1229340/';

  // The structure of our request call
  // The first parameter is our url
  // the callback function takes 3 parameters: error, response, html
  request(url, function(error, response, html) {
    // first check to make sure there are no errors when making the request
    if(!error){
      // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
      var $ = cheerio.load(html);
      // Finally, we'll define the variables we're going to capture
      var title, release, rating;
      var json = { title : "", release : "", rating : ""}; 
    }
  })
});

app.listen('8081');

console.log('The magic happens on port 8081');

exports = module.exports = app;
