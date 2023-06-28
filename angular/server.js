const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).type('html').send(data);
    }
  });
});





app.get('/index.js', (req, res) => {
  fs.readFile('index.js', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).type('js').send(data);
    }
  });
});


app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
// app.get('/index.css', (req, res) => {
//   fs.readFile('index.css', (err, data) => {
//     if (err) {
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.status(200).type('css').send(data);
//     }
//   });
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});