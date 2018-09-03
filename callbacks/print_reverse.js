var getHTML = require('../http-functions');

var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


function printReverse (html) {
  var string = html.split("").reverse().join("");
  console.log(string);

}

getHTML(requestOptions, printReverse);