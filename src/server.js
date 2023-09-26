const express = require('express');
const router = require('./routes');
const path = require('path');
const sequelize = require('./config/connections');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(router);


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});