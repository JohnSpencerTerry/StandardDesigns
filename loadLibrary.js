// kethinov/walksync.js

var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(file);
    }
  });
  return filelist;
};

var formatAsImport = function(filelist){
    filelist.forEach(function(file){
        file = "@import " + file;
    });
    return filelist;
};

var importedLessFiles =[];
var rootDirectory = "./lib_/";

walkSync(rootDirectory, importedLessFiles);
console.log(formatAsImport(importedLessFiles));
console.log(importedLessFiles);