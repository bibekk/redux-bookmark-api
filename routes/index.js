var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(function(req, res, next) {
      var token = req.body.token || req.query.token || req.headers['ep-token'];
    console.log(token)
    next()
})

module.exports = router;