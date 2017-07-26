// Will clone required settings from the main package.json and include it in the dist folder.
var parsedJSON = require('./package.json');
var fs = require('fs');

var electronPackage = {
  "name": parsedJSON.name,
  "version": parsedJSON.version,
  "license": parsedJSON.license,
  "main": "main.js",
  "author": parsedJSON.author,
  "dependencies": parsedJSON.dependencies
}

fs.writeFile("./dist/package.json", JSON.stringify(electronPackage), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
