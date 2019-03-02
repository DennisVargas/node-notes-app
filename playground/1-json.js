const fs = require('fs');
const filePath = '1-json.json';
var jsonFileData = fs.readFileSync(filePath);
var jsonStringData = jsonFileData.toString();
var jsonData = JSON.parse(jsonStringData);
console.log("original json data:", jsonData);

jsonData.name = 'Dennis';
jsonData.planet = 'Titan';
jsonData.age = 37;
console.log("changed json data:", jsonData);
jsonStringData = JSON.stringify(jsonData);
fs.writeFileSync(filePath, jsonStringData);