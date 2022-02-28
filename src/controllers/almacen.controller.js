const db = require('../connection/database');

export const createAlmacen = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_almacen (id_producto, numero_activos, costo_unitario, fecha_ultima_salida, usuario_alta) VALUES (?, ?, ?, ?, ?)',
    [req.body.id_producto,
      req.body.numero_activos,
      req.body.costo_unitario,
      req.body.fecha_ultima_salida,
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

export const getAlmacen = async (req, res) => {
  await db.query('SELECT * FROM tabla_almacen ORDER BY id_almacen DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const getAlmacenById = async (req, res) => {
  await db.query('SELECT * FROM tabla_almacen WHERE id_almacen = ?', [req.params.almacenId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const updateAlmacenById = async (req, res) => {
  await db.query(
    'UPDATE tabla_almacen SET id_producto = ?, numero_activos = ?, costo_unitario = ?, fecha_ultima_salida = ?, usuario_alta = ? WHERE id_almacen = ?',
    [req.body.id_producto,
      req.body.numero_activos,
      req.body.costo_unitario,
      req.body.fecha_ultima_salida,
      req.body.usuario_alta,
      req.params.almacenId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const deleteAlmacenById = async (req, res) => {
  await db.query('DELETE FROM tabla_almacen WHERE id_almacen = ?', [req.params.almacenId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};
