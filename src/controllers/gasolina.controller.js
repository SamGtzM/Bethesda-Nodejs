const db = require('../connection/database');

export const createGasolina = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_control_gasolina (id_usuario, cantidad_gasolina, fecha_carga) VALUES (?, ?, ?)',
    [req.body.id_usuario,
      req.body.cantidad_gasolina,
      req.body.fecha_carga],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const getGasolina = async (req, res) => {
  await db.query('SELECT * FROM tabla_control_gasolina ORDER BY id_gasolina DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const getGasolinaById = async (req, res) => {
  await db.query('SELECT * FROM tabla_control_gasolina WHERE id_gasolina = ?', [req.params.gasolinaId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const updateGasolinaById = async (req, res) => {
  await db.query(
    'UPDATE tabla_control_gasolina SET id_usuario = ?, cantidad_gasolina = ?, fecha_carga = ? WHERE id_gasolina = ?',
    [req.body.id_usuario,
      req.body.cantidad_gasolina,
      req.body.fecha_carga,
      req.params.gasolinaId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const deleteGasolinaById = async (req, res) => {
  await db.query('DELETE FROM tabla_control_gasolina WHERE id_gasolina = ?', [req.params.gasolinaId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};
