var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('ukinode.txt', 'paragrph Here ', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
