require('dotenv').config();
const express = require('express');
const mustacheExpress = require('mustache-express');
const router = require('./routes');

const app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/app/views');
// app.engine('mustache', mustache(__dirname + '/app/views/partials', '.mustache'));
app.use(express.static(__dirname + '/public'));

// Cargar rutas
// app.use(router);

app.get('/', (req, res) => {
  const locals = {

  };
  res.render('search', {
    posts: [ {
      title: 'Title',
    },
    {
      title: 'Title',
    },
    {
      title: 'Title',
    },
    ],
  });
});

app.listen(process.env.PORT, () => console.log(`Started listening on port ${process.env.PORT}!`));
