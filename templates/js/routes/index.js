var express = require('express');
var db = require('../config/mongo');
var router = express.Router();
var usersController = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/health', function(req, res) {
    res.send({
        "db": {
            "connected": db.readyState
        },
        "app": {

        }
    });
});

router.get('/users', usersController.displayAll);
router.post('/users', usersController.create);

module.exports = router;
