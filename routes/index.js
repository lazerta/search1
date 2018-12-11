const express = require('express');
const router = express.Router();
const hb = require('hbs');



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/index',((req, res) => res.redirect('/')));
module.exports = router;

router.get('/search',((req, res) =>{
 let term = req.query;
  res.render('search');

} ));

