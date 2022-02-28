const express = require('express');
const morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// ROUTES
const userRoute = require('./routes/user.routes');
const authRoute = require('./routes/auth.routes');
const clientsRoute = require('./routes/clientes.routes');
const almacenRoute = require('./routes/almacen.routes');
const gasolinaRoute = require('./routes/gasolina.routes');
const ventasRoute = require('./routes/ventas.routes');
const productosRoute = require('./routes/productos.routes');

app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/clientes', clientsRoute);
app.use('/productos', productosRoute);
app.use('/almacen', almacenRoute);
app.use('/ventas', ventasRoute);
app.use('/gasolina', gasolinaRoute);

module.exports = app;
