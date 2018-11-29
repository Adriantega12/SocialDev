require('dotenv').config();
const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const router = require('./routes');

const app = express();

// Template rendering setup
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'source/views'));
app.use(express.static(path.join(__dirname, 'public')));

// Cargar rutas
app.use(router);

app.listen(process.env.PORT, () => console.log(`Started listening on port ${process.env.PORT}!`));
