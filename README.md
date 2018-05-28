[![Build Status](https://travis-ci.org/Lennerblom/03-asynchronous-callbacks.svg?branch=master)](https://travis-ci.org/Lennerblom/03-asynchronous-callbacks)

# Asynchronous Callbacks
The **reader.js module** creates and exports a function with an airty of two that takes in an array of 3 file paths, and a callback that will return either an error or the data in the form of a string.  It returns a string mapped from an array of files using an error-first callback. If there is an error, it will immediately reject the error and stop the execution.  

A series of tests check for invalid file paths, and that the function correctly resolves mapped string data from the file paths array.