const db = require('../connection/database');

export const createProduct = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_productos (nombre_producto) VALUES (?)',
    [req.body.nombre_producto],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const getProducts = async (req, res) => {
  await db.query('SELECT * FROM tabla_productos ORDER BY id_producto DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const getProductsById = async (req, res) => {
  await db.query('SELECT * FROM tabla_productos WHERE id_producto = ?', [req.params.productId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const updateProductsById = async (req, res) => {
  await db.query(
    'UPDATE tabla_productos SET nombre_producto = ? WHERE id_producto = ?',
    [req.body.nombre_producto,
      req.params.productId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const deleteProductsById = async (req, res) => {
  await db.query('DELETE FROM tabla_productos WHERE id_producto = ?', [req.params.productId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};
