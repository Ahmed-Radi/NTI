const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');

// Declare public path
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

// Add template engine
app.set('view engine', 'hbs');

// Change views path
const viewsPath = path.join(__dirname, '../templates/views');
app.set('views', viewsPath);

// Define partials path
var hbs = require('hbs');
const PartialsPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(PartialsPath);

// Require API
const newsApi = require('./api/new-api');

app.get('/', (req, res) => {
    newsApi((error, data) => {
        error ? res.render('index', {error}) : res.render('index', {articles: data.articles})
    });
});

// 4O4 page
app.get('*', (req, res) => {
    res.render('not_found', {message: '404 Not found'});
});

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});