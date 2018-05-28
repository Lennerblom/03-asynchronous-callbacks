'use strict';

const fs = require('fs');

module.exports = exports = (paths, callback) => {

  let result = [];
  for(let i = 0; i < paths.length; i++) {
    fs.readFile(paths[i],(err, data) => {
      if(err) {callback(err);}
      else { 
        result[i] = data.toString().trim();
        if (result.length === paths.length) 
    
          callback(null, result);
      }
    });
  }
};
