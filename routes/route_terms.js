var express = require('express');
var router = express.Router();
var Term = require('../models/Terms');
/*
router.use(function(req,res,next){
   next();
});
*/

router.get('/',function(req,res,next){
    Term.getAllTerms(function(err,rows){
          if(err){
              res.json(err);
          } else{
              res.json(rows);
          }
       });
});

router.post('/',function(req,res,next){
   Term.addTerm(req.body,function(err,count){
      if(err){
          res.json(err);
      } else{
          res.json(count);
      }
   });
});

router.delete('/:id',function(req,res,next){
   Term.deleteTerm(req.params.id, function(err,rows){
      if(err){
          res.json(err);
      } else{
          res.json(rows);
      }
   });
});










router.get('/maxid',function(req,res,next){ //res.send("maxid");
   Task.getMaxId(function(err,count){
      if(err){
          res.json(err);
      } else{
          res.json(count);
      }
   });
});

router.get('/:id',function(req,res,next){
   if(req.params.id){
       Task.getUserById(req.params.id, function(err,rows){
          if(err){
              res.json(err);
          } else{
              res.json(rows);
          }
       });
   }
});






router.put('/:id',function(req,res,next){ //console.log(req.body);
   Task.updateUser(req.params.id,req.body,function(err,rows){
      if(err){
          res.json(err);
      }else{
          res.json(rows);
      }
   });
});




module.exports = router;
