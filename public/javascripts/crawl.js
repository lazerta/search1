const request = require('request');

request('https://stackoverflow.com/questions/48248832/stylesheet-not-loaded-because-of-mime-type', { json: true }, async (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body)
    let dom = new DomDocument();
});