var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

router.get('/users', usersController.displayAll);
router.post('/users', usersController.create);

module.exports = router;
