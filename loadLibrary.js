var fs = require('fs');

fs.readdir('./lib_', function(err, files){
    if(err) throw err;
    console.log(files);
});