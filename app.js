const express = require('express');

const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', (req, res, next) => {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
       if (err) {
           return console.log(err);
       }
        data = data.replace(/\$OG_TITLE/g, 'Home Page');
        data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
        const result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
        res.send(result);
    });
});

app.get('/example', (req, res, next) => {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'Example Page');
        data = data.replace(/\$OG_DESCRIPTION/g, "Example page description");
        const result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
        res.send(result);
    });
})

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    response.sendFile(filePath);
});

module.exports = app;
