const fs = require('fs');
module.exports = function writefile(query, obj) {
  // write to output
  if (fs.existsSync(`./output/${query}.json`)) {
    fs.readFile(`./output/${query}.json`, function (err, data) {
      const json = JSON.parse(data);
      const newData = json.concat(obj);

      fs.writeFile(`./output/${query}.json`, JSON.stringify(newData, null, 2), 'utf8', function(err) {
        if(err) {
          return console.log(err);
        }

        console.log('JSON saved');
      });

    });
  }else {
    fs.writeFile(`./output/${query}.json`, JSON.stringify(obj, null, 2), 'utf8', function(err) {
      if(err) {
        return console.log(err);
      }

      console.log('JSON saved');
    });
  }
};