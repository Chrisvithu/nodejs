var fs = require('fs');

//append content at the end of the file:
fs.appendFile('ukinode.txt', ' This is my text append test blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa blaa love you blaa blaa blaa.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
