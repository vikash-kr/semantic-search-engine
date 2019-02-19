const express = require('express')
const app = express()
const port = 3000
const rp = require('request-promise')
var bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

// setting up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', 
	function(req, res) 
	{  
	 let a;
	 rp(options)
  .then(function (data) {
    // Request succeeded
    a= JSON.stringify(data,null,2);
    //console.log(JSON.stringify(data,null,2));
    res.render('index',{data:data});
  })
  .catch(function (err) {
    // Request failed
    console.log(err.statusCode + ': ' + err.error);
  });

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



app.listen(port, () => console.log("Example app listening on port " + port))