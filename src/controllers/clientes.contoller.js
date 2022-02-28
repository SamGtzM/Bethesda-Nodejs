const db = require('../connection/database');

export const createClient = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_clientes (nombre_completo, telefono, usuario_alta) VALUES (?, ?, ?)',
    [req.body.nombre_completo,
      req.body.telefono,
      req.body.usuario_alta],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const getClients = async (req, res) => {
  await db.query('SELECT * FROM tabla_clientes ORDER BY id_cliente DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const getClientsById = async (req, res) => {
  await db.query('SELECT * FROM tabla_clientes WHERE id_cliente = ?', [req.params.clientId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const updateClientsById = async (req, res) => {
  await db.query(
    'UPDATE tabla_clientes SET nombre_completo = ?, telefono = ?, usuario_alta = ? WHERE id_cliente = ?',
    [req.body.nombre_completo,
      req.body.telefono,
      req.body.usuario_alta,
      req.params.clientId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const deleteClientsById = async (req, res) => {
  await db.query('DELETE FROM tabla_clientes WHERE id_cliente = ?', [req.params.clientId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};
