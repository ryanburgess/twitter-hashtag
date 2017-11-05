# Twitter Hashtag
Twitter Hashtag creates a list of people on Twitter using a particular hashtag and creates a JSON and CSV file of the list of names, usernames, bios, locations, Twitter account URLs.

## Setup
Make sure you have [Node.js](https://nodejs.org) installed.

```js
npm install
```

Rename `config-example.js` to `config.js`

[Get a Twitter API Key](https://apps.twitter.com/app/new)

In the `config.js` fill in the API key information for consumer_key, consumer_secret, access_token, and access_token_secret.
```js
  consumer_key: '',  
  consumer_secret: '',
  access_token: '',  
  access_token_secret: ''
```

## Useage
After setting up your config file to use your Twitter API key you're ready to start pulling data from Twitter hashtags.

### Command
In your terminal in the directory of the project run:
```js
node hashtag [the hashtag you want]
```

Example command:
```js
node hashtag netflix
```

The above command will pull names, usernames, bios, locations, Twitter account URLs and creates a JSON and CSV in the output directory for the hashtag.


## Contributing
1. Fork it
2. Run `npm install`
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create new Pull Request

## License
MIT © [Ryan Burgess](http://github.com/ryanburgess)