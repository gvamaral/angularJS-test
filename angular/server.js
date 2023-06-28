const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');


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




// app.get('/WeatherController.js', (req, res) => {
//   fs.readFile('WeatherController.js', 'utf8', (err, data) => {
//     if (err) {
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.status(200).type('text/javascript').send(data);
//     }
//   });
// });

// app.get('/controllers/SearchController.js', (req, res) => {
//   fs.readFile('controllers/SearchController.js', 'utf8', (err, data) => {
//     if (err) {
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.status(200).type('text/javascript').send(data);
//     }
//   });
// });









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