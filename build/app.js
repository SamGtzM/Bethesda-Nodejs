"use strict";

var express = require('express');

var morgan = require('morgan');

var app = express();

var bodyParser = require('body-parser');

var cors = require('cors');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev')); // ROUTES

var userRoute = require('./routes/user.routes');

var authRoute = require('./routes/auth.routes');

var clientsRoute = require('./routes/clientes.routes');

var almacenRoute = require('./routes/almacen.routes');

var gasolinaRoute = require('./routes/gasolina.routes');

var ventasRoute = require('./routes/ventas.routes');

app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/clientes', clientsRoute);
app.use('/almacen', almacenRoute);
app.use('/gasolina', gasolinaRoute);
app.use('/ventas', ventasRoute);
module.exports = app;