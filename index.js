const fs = require('fs');
// fs.access('./names.txt', fs.constants.W_OK, (err) => {
//   console.log(err);
// });

// fs.rename('names.txt', 'newNames.txt', (err) => {
//   if (err) throw err;
//   if (err) console.log(err);
//   console.log('Name changed.')

// })


// try {
//   fs.renameSync('names.txt', 'users.txt');
// } catch (err) {
//   console.log(err);
// }


// fs.readFile('users.txt', 'utf8', (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// })
// try {
//   console.log(fs.readFileSync('users.txt', 'utf8'));
// } catch (err) {
//   console.log(err);
// }
// fs.readFile('names.txt', 'utf8', (err, data) => {
//   if (err) return console.log(err);
//   fs.writeFile('users.txt', data, (err) => {
//     if (err) console.log(err);
//     else console.log('success ')
//   })
// })

const names = 'Hsiu Kellem Judie Dorfman Rosena Bebout Dawne Pereda Jayson Janicki Hellen Kissell'
fs.readFile('names.txt', (err, data) => {
  if (err) return console.log(err);
  console.log(data);
  fs.appendFile('users.txt', data, (err) => {
    if (err) console.log(err);
    else console.log('success ')
  })
})
