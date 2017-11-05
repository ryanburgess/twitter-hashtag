const fs = require('fs');
const twit = require('twit');
const config = require('./config.js');
const dedupe = require('dedupe');
const write = require('./lib/write');
const writeCSV = require('./lib/write-csv');
const Twitter = new twit(config);
const obj = [];
let info;
// get the arguement passed to terminal
const query = process.argv[2];

// function to retrieve data from the hashtag passed
function getData() {
  // get all the people that follow a person
  Twitter.get('search/tweets', { q: '#' + query, count: 100 },  function (err, data, response) {
    if(err) {
        return console.log(err);
    }

    //tweets with the hashtag
    const tweets = data.statuses;

    // loop through the tweets with the hashtag
    for (let item in tweets) {
      const userInfo = tweets[item].user;
      const name = userInfo.name;
      const username = userInfo.screen_name;
      const location = userInfo.location;
      const bio = userInfo.description;

      // create info object with twitter user info
      info = {
        'name': name,
        'username': username,
        'location': location,
        'bio': bio,
        'url': `https://twitter.com/${username}`
      }

      // push the data 
      obj.push(info);
    }

    // remove duplicate names
    const finalOutput = dedupe(obj);
    // call writeFunction to write the info information to JSON
    write(query, finalOutput);

    // create CSV file
    writeCSV(query, finalOutput);
  });
}

if (!query) {
  // return message to user not to include a # with their query
  console.log('No need to include a #');
}else {
  // call get data
  getData();
}

