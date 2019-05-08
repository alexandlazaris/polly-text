// import entire SDK
var AWS = require('aws-sdk');
require('./auth.js');

  
var polly = new AWS.Polly();

polly.describeVoices(function(err, data) {
  if (err) console.log(err, err.stack); 
  else console.log(data);
})