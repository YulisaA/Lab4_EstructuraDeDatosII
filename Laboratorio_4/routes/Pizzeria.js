var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('../views/pizzeria', { title: 'Laboratorio 4' });
});
router.post('/',function(req, res) {
  res.render('../views/CreatePizza');
});
module.exports = router;


