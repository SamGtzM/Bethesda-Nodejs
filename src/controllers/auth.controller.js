const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../connection/database');
const config = require('../config');

export const getUsers = async (req, res) => {
  await db.query('SELECT * FROM tabla_usuario ORDER BY id_usuario DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const getUsersById = async (req, res) => {
  await db.query('SELECT * FROM tabla_usuario WHERE id_usuario = ?', [req.params.userId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const updateUsersById = async (req, res) => {
  const { pass } = req.body;
  const passHashUpdate = await bcryptjs.hash(pass, 10);
  await db.query(
    'UPDATE tabla_usuario SET id_acceso = ?, numero_empleado = ?, nombre_completo = ?, correo_electronico = ?, telefono = ?, usuario = ?, pass = ? WHERE id_usuario = ?',
    [req.body.id_acceso,
      req.body.numero_empleado,
      req.body.nombre_completo,
      req.body.correo_electronico,
      req.body.telefono,
      req.body.usuario,
      passHashUpdate,
      req.params.userId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err, fields);
      }
    },
  );
};

export const deleteUsersById = async (req, res) => {
  await db.query('DELETE FROM tabla_usuario WHERE id_usuario = ?', [req.params.userId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows);
    } else {
      console.log(err, fields);
    }
  });
};

export const singupUser = async (req, res) => {
  const { pass } = req.body;
  const passHash = await bcryptjs.hash(pass, 10);
  db.query(
    'SELECT * FROM tabla_usuario WHERE numero_empleado =? OR correo_electronico =? OR telefono =? OR usuario =?',
    [req.body.numero_empleado,
      req.body.correo_electronico,
      req.body.telefono,
      req.body.usuario],
    (err, rows, fields) => {
      if (!err) {
        if (rows.length === 0) {
          db.query(
            'INSERT INTO tabla_usuario (id_acceso, numero_empleado, nombre_completo, correo_electronico, telefono, usuario, pass, usuario_alta) VALUES (?,?,?,?,?,?,?,?)',
            [req.body.id_acceso,
              req.body.numero_empleado,
              req.body.nombre_completo,
              req.body.correo_electronico,
              req.body.telefono,
              req.body.usuario,
              passHash,
              req.body.usuario_alta],
            (errInsert, rowsInsert, fieldsInsert) => {
              if (!errInsert) {
                res.status(200).json(rowsInsert);
              } else {
                res.json(errInsert, fieldsInsert);
              }
            },
          );
        } else {
          const num = Number(rows[0].numero_empleado);
          const num2 = Number(req.body.numero_empleado);
          if (num === num2) {
            console.log('numero de empleado', rows[0].numero_empleado, 'ya registrado');
          } else if (rows[0].correo_electronico === req.body.correo_electronico) {
            console.log('correo', rows[0].correo_electronico, 'ya regsitrado');
          } else if (rows[0].telefono === req.body.telefono) {
            console.log('telefono', rows[0].telefono, 'ya registrado');
          } else if (rows[0].usuario === req.body.usuario) {
            console.log('usuario', rows[0].usuario, 'ya esta registrado');
          }
        }
      } else {
        res.json(err, fields);
      }
    },
  );
};

export const singinUser = async (req, res) => {
  db.query('SELECT * FROM tabla_usuario WHERE usuario = ?', [req.body.usuario], (err, rows, fields) => {
    if (rows.length !== 0) {
      bcryptjs.compare(req.body.pass, rows[0].pass, (errpass, respass) => {
        if (errpass) {
          console.log(err);
        }
        if (respass) {
          console.log('password correcto');
          const data = JSON.stringify(rows[0]);
          const token = jwt.sign(data, config.llave);
          console.log('AUTENTICACIÓN EXITOSA!', token);
          res.json({ token });
        } else {
          console.log('password incorrecto');
        }
      });
    } else {
      console.log('usuario incorrecto');
    }
  });
};

export const testToken = async (req, res) => {
  if (!req.headers.authorization) return res.status(401).json('No autorizado');
  const token = req.headers.authorization.substr(7);
  if (token !== '') {
    const content = jwt.verify(token, config.llave);
    req.data = content;
    res.json('Información secreta');
  } else {
    res.status(401).json('token vacio');
  }
};
