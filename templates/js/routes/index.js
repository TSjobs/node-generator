var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/users', usersController.displayAll);
router.post('/users', usersController.create);

module.exports = router;
