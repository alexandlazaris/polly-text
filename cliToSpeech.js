// import entire SDK
var AWS = require('aws-sdk');
var fs = require('fs');
var dateTime = new Date();
require('./auth.js');

var polly = new AWS.Polly();
var TEXT = process.argv[2];
var VOICE = process.argv[3];

var params = {
  OutputFormat: 'mp3', 
  Text: (TEXT), 
  VoiceId: VOICE,
  SampleRate: '16000'
}

var synthCallBack = function (err,data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
  var timeString = dateTime.getHours() + '-' + dateTime.getMinutes() + '-' + dateTime.getSeconds();
  fs.writeFile('cli-to-speech-' + timeString + '.mp3', data.AudioStream, function (err) {
    if (err) {
      console.log('An error occured while writing the file.')
      console.log(err.stack)
    }
    console.log('Finished writing the file to the system')
  });
};

polly.synthesizeSpeech(params, synthCallBack);