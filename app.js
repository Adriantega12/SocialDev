require('dotenv').config();
const express = require('express');
const mustacheExpress = require('mustache-express');
const router = require('./routes');

const app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/app/views');
app.use(express.static(__dirname + '/public'));

// Cargar rutas
app.use(router);

app.listen(process.env.PORT, () => console.log(`Started listening on port ${process.env.PORT}!`));
