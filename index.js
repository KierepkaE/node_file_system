const fs = require('fs');
fs.access('./names.txt', fs.constants.W_OK, (err) => {
  console.log(err);
});

fs.rename('names.txt', 'newNames.txt', (err) => {
  if (err) throw err;
  if (err) console.log(err);
  console.log('Name changed.')

})