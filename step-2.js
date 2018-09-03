var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, response => {

    var theString = '';

    response.setEncoding('utf8');
    response.on('data', chunk => {
      theString += chunk;

    })

    response.on('end', () => {
      console.log(theString);
      console.log('Stream is complete');
    })
  })
}

getAndPrintHTML();