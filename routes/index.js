var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=>res.render('index', { title: 'Express' }))

router.use((req, res, next)=>{
    var token = req.body.token || req.query.token || req.headers['ep-token'];
    next()
})

module.exports = router;