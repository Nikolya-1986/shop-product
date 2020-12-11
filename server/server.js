const path  = require('path');//require аналог импорта, path библиотека имеет доступ к адресам 
const express = require('express');
const app = express();

const srcPath = path.join(__dirname, '..', 'dist/app-shop')

const port = process.env.PORT || 3000;//порт или 3000 или который даст heroku

app.use(express.static(srcPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(srcPath, 'index.html'))
});

app.listen(port, () => {
    console.log("SERVER WORKS!!!")
})
