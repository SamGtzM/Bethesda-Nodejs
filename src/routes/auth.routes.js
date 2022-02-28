const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth.controller');

router.get('/', authController.getUsers);
router.post('/singup', authController.singupUser);
router.post('/singin', authController.singinUser);
router.get('/:userId', authController.getUsersById);
router.put('/:userId', authController.updateUsersById);
router.delete('/:userId', authController.deleteUsersById);
router.post('/test', authController.testToken);

module.exports = router;
