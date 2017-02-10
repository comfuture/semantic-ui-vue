// module import
const os = require('os');
const fs = require('fs');

const platform = os.platform();

/*
  platform Type

  win32: windows 32bit / 64bit  
*/

// Example
// if (platform === 'win32') {}

fs.unlink('./dist/docs', (err) => {
  if (err) {
    throw err;
  }

  console.log('successfully unlink dist folder.');
});