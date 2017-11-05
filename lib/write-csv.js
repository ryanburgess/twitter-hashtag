const fs = require('fs');
const jsonexport = require('jsonexport');
module.exports = function writeCSV(query) {

  fs.readFile(`./output/${query}.json`, function (err, data) {
    const json = JSON.parse(data);

    // convert Object to CSV
    jsonexport(json,function(err, csv){
      if(err) return console.log(err);

      // write CSV data to file
      fs.writeFile(`./output/${query}.csv`, csv, function(err) {
        if (err) throw err;
        console.log('CSV saved');
      });
    });
  });
};