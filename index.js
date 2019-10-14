const fs = require('fs');
fs.access('./names.txt', (err) => {
  console.log(err);
});