const express = require('express');
const { body } = require('express-validator');
const { register, login, logout } = require('../controllers/authController');

const router = express.Router();

router.post('/register', [
  body('username').notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], register);

router.post('/login', login);
router.post('/logout', logout);

module.exports = router;