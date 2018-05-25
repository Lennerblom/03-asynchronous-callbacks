'use strict';

const reader = require('../lib/reader.js');

//let files = '../Documents';

describe('Reader Module', () => {

  it('should callback with error for a non-existant file', (done) => {
    reader(['missing.txt'], (err) => {
      expect(err).not.toBeNull();

      done();
    });
  });

  it('should callback with error for any non-existant file', (done) => {
    reader([__dirname + '/../data/tacos.txt', 'missing.txt'], (err) => {
      expect(err).not.toBeNull();

      done();
    });
  });
  it('should callback with file contents of one file', (done) => {
    const expected = 'I like tacos.';
    reader([__dirname + '/../data/taco.txt'], (err, data) => {
      expect(err).toBeNull();
      const actual = data.toString();
      expect(actual).toBe(expected);
      done();
    });
  });
  it('should callback all the contents of the files in order', (done) => {
    let paths = [];
    for(let item of ['pizza.txt', 'taco.txt', 'tamales.txt']) {
      paths.push(__dirname + '/../data/' + item);
    }
    let expected, actual;
    reader(paths, (err, data) => {
      expected = 'I like taco pizza.';
      expect(err).toBeNull();
      actual = data[0];
      expect(actual).toBe(expected);

      expected = 'I like tacos.';
      actual = data[1];
      expect(actual).toBe(expected);

      expected = 'I like homemade tamales, I\'ve made them is a pressure cooker(faster).';
      actual = data[2];
      expect(actual).toBe(expected);
        
      done();

    });

  });

});

