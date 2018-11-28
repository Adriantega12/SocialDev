require('dotenv').config();
const express = require('express');
const router = require('./routes');

const app = express();

// Cargar rutas
app.use(router);

app.listen(process.env.PORT, () => console.log(`Started listening on port ${process.env.PORT}!`));
