const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'Ironmaiden12',
  database: 'bethesda',

});

mysqlConnection.connect((err) => {
  if (err) {
    console.log('Error en db: ', err);
  } else {
    console.log('DB ok');
  }
});

module.exports = mysqlConnection;
