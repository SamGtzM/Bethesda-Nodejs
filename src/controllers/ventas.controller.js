const db = require('../connection/database');

export const createVenta = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_ventas (id_usuario, id_cliente, id_producto, cantidad, entregado, precio) VALUES (?, ?, ?, ?, ?, ?)',
    [req.body.id_usuario,
      req.body.id_cliente,
      req.body.id_producto,
      req.body.cantidad,
      req.body.entregado,
      req.body.precio],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const getVentas = async (req, res) => {
  await db.query('SELECT * FROM tabla_ventas ORDER BY id_venta DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const getVentaById = async (req, res) => {
  await db.query('SELECT * FROM tabla_ventas WHERE id_venta = ?', [req.params.ventasId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const updateVentaById = async (req, res) => {
  await db.query(
    'UPDATE tabla_ventas SET id_usuario = ?, id_cliente = ?, id_producto = ?, cantidad = ?, entregado = ?, precio = ? WHERE id_venta = ?',
    [req.body.id_usuario,
      req.body.id_cliente,
      req.body.id_producto,
      req.body.cantidad,
      req.body.entregado,
      req.body.precio,
      req.params.ventasId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const deleteVentaById = async (req, res) => {
  await db.query('DELETE FROM tabla_ventas WHERE id_venta = ?', [req.params.ventasId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};
