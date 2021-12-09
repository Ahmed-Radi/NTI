const express = require('express');
const app = express();

const port = process.env.PORT || 3000

const path = require('path');

const publicPath = path.join(__dirname, '../public')
console.log(publicPath)