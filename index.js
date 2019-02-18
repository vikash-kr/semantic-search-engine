const express = require('express')
const app = express()
const port = 3000
const rp = require('request-promise')

app.get('/', 
	function(req, res) 
	{ 
		res.send('Hello World!')
	}
)



var options = {
  method: 'GET',
  body: {
    url: 'https://www.codechef.com/ide'
  },
  uri: 'https://api.link.fish/Urls/data',
  auth: {
    user: 'vviikkaasshh1997@gmail.com',
    pass: '4akmVvc2DWQTPVI4WmaAUGai0QAVsVtt'
  },
  json: true
};

rp(options)
  .then(function (data) {
    // Request succeeded
    console.log(JSON.stringify(data,null,2));
  })
  .catch(function (err) {
    // Request failed
    console.log(err.statusCode + ': ' + err.error);
  });

app.listen(port, () => console.log("Example app listening on port " + port))