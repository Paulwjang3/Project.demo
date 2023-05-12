const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const PORT = 3001;
const app = express();

app.use(controllers);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Connect to the database AND THEN run the server.
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  