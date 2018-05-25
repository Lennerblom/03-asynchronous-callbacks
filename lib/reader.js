'use strict';

const fs = require('fs');

module.exports = exports = (files, callback) => {

  let newArr = [];
  for(let i = 0; i < files.length; i++) {
    fs.readFile(files[i],(err, data) => {
      if(err) {callback(err);}
      else { 
        newArr[i] = data.toString().trim();
        if (newArr.length === files.length) 
    
          callback(undefined, newArr);
      }
    });
  }
};
