require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const mustacheExpress = require('mustache-express');
const router = require('./routes');
const { errorHandler, Auth } = require('./middlewares');

const app = express();

// Middleware loading
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

// App locals
app.locals.API_HOST = process.env.API_HOST;
app.locals.CLIENT_HOST = process.env.CLIENT_HOST;

// Template rendering setup
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'source/views'));
app.use(express.static(path.join(__dirname, 'public')));

// Method Override
app.use(methodOverride('_method'));

// Get current session
app.use(Auth.getCurrentSession);

// Load routes
app.use(router);

// Load errorHandler
app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(`Started listening on port ${process.env.PORT}!`));
