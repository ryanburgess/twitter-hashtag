const fs = require('fs');
const jsonexport = require('jsonexport');
module.exports = function writeCSV(query, obj) {
  // convert Object to CSV
  jsonexport(obj,function(err, csv){
    if(err) return console.log(err);

    // write CSV data to file
    fs.writeFile(`./output/${query}.csv`, csv, function(err) {
      if (err) throw err;
      console.log('CSV saved');
    });
  });
};