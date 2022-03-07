const db = require('../connection/database');

export const createEntrega = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_entregas (id_usuario, id_producto, id_cliente, cantidad, precio, entregado) VALUES (?, ?, ?, ?, ?, ?)',
    [req.body.id_usuario,
      req.body.id_producto,
      req.body.id_cliente,
      req.body.cantidad,
      req.body.precio,
      req.body.entregado],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const getEntregas = async (req, res) => {
  await db.query('SELECT * FROM tabla_entregas ORDER BY id_entrega DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const getEntregasById = async (req, res) => {
  await db.query('SELECT * FROM tabla_entregas WHERE id_entrega = ?', [req.params.entregasId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const updateEntregasById = async (req, res) => {
  await db.query(
    'UPDATE tabla_entregas SET id_usuario = ?, id_producto = ?, id_cliente = ?, cantidad = ?, precio = ?, entregado = ? fecha_mtto_hasta = ? WHERE id_entrega = ?',
    [req.body.id_usuario,
      req.body.id_producto,
      req.body.id_cliente,
      req.body.cantidad,
      req.body.precio,
      req.body.entregado,
      req.params.entregasId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const deleteEntregasById = async (req, res) => {
  await db.query('DELETE FROM tabla_entregas WHERE id_entrega = ?', [req.params.entregasId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};
