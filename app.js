// import entire SDK
var AWS = require('aws-sdk');
var fs = require('fs');
var dateTime = new Date();
require('./auth.js');

  
var polly = new AWS.Polly();

polly.describeVoices({ "LanguageCode": "de-DE" }, function(err, data) {
  if (err) console.log(err, err.stack); 
  else console.log(data);
})

var params = {
  OutputFormat: 'mp3', 
  Text: ('Guten abend Alexander. Es ist ' + dateTime.getMinutes() + ' past ' + dateTime.getHours() + '. I hope you have an amazing day. Auf Wiedersehen.'), 
  VoiceId: 'Vicki',
  SampleRate: '16000'
}

var synthCallBack = function (err,data) {
  if (err) console.log(err, err.stack);
  else console.log(data);

  fs.writeFile('testing.mp3', data.AudioStream, function (err) {
    if (err) {
      console.log('An error occured while writing the file.')
      console.log(err.stack)
    }
    console.log('Finished writing the file to the system')
  });
};

polly.synthesizeSpeech(params, synthCallBack);