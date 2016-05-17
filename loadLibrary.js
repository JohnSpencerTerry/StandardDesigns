// walksync method adapted from kethinov/walksync.js

function loadLibrary(){
  var rootDirectory = "./lib_/";
  var importedLessFiles = [];
  
  var walkSync = function(dir, filelist) {
        var fs = fs || require('fs');
        var files = fs.readdirSync(dir);
        var filelist = filelist || [];
        files.forEach(function(file) {
          if (fs.statSync(dir + file).isDirectory()) {
            filelist = walkSync(dir + file + '/', filelist);
          } else {
            filelist.push(dir+file);
          }
        
         });
        return filelist;
     };
     
    
    var formatAsImportStatement = function(filelist){
        var filelist = filelist || [];
        var os = os || require("os");
            for(var i = 0, max = filelist.length; i < max; i++){
                filelist[i] = "@import " + "'" + filelist[i] + "'" + ";";
            }
            return filelist.join(os.EOL);
        };
    
    this.importedFiles = formatAsImportStatement(walkSync(rootDirectory, importedLessFiles));
}

loadLibrary.prototype.createLoaderFile = function(){
    var fs = fs || require('fs');
    fs.writeFile('autoload.less', this.importedFiles, 'utf8', function(){
      console.log('autoloader file created');
    });
    
}

var tester = new loadLibrary();
tester.createLoaderFile();
