# polly-text
Text to speech using AWS Polly

Steps for AWS
1. New folder, npm init + git init
2. Install AWS skd through npm, v2.449 used
3. Create programmatic AWS user, give Polly access rights only
4. Store credentials + region into creds.json
5. Create auth.js to load cred.json using aws-sdk library
6. Create AWS Polly object in js file and utilize Polly functions to create text to speech functionality

Guide: https://trevorsullivan.net/2016/12/01/amazon-aws-cloud-polly-nodejs/

## Hard-coded
* Modify text variable within code

## CLI arguments
* 2 parameters can be passed in: Speech text, Voice
* Speech text must be first, followed by Voice
* Both values are strings. Example `node ./cliToSpeech.js "Say these magic words" "Hans"