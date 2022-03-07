const db = require('../connection/database');

export const createMantenimiento = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_mantenimiento (id_producto, fecha_mtto_hasta) VALUES (?, ?)',
    [req.body.id_producto,
      req.body.fecha_mtto_hasta],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const getMantenimientos = async (req, res) => {
  await db.query('SELECT * FROM tabla_mantenimiento ORDER BY id_mantenimiento DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const getMantenimientosById = async (req, res) => {
  await db.query('SELECT * FROM tabla_mantenimiento WHERE id_mantenimiento = ?', [req.params.mantenimientoId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const updateMantenimientosById = async (req, res) => {
  await db.query(
    'UPDATE tabla_mantenimiento SET id_producto = ?, fecha_mtto_hasta = ? WHERE id_mantenimiento = ?',
    [req.body.id_producto,
      req.body.fecha_mtto_hasta,
      req.params.mantenimientoId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const deleteMantenimientosById = async (req, res) => {
  await db.query('DELETE FROM tabla_mantenimiento WHERE id_mantenimiento = ?', [req.params.mantenimientoId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};
