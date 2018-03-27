var express = require('express');
var router = express.Router();
var Task = require('../models/Blog');
/*
router.use(function(req,res,next){
   next();
});
*/
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


router.get('/',function(req,res,next){
    Task.getAllUsers(function(err,rows){
          if(err){
              res.json(err);
          } else{
              res.json(rows);
          }
       });
});

router.post('/',function(req,res,next){ console.log(req.body);
   Task.addTask(req.body,function(err,count){
      if(err){
          res.json(err);
      } else{
          res.json(count);
      }
   });
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

router.delete('/:id',function(req,res,next){
   Task.deleteTask(req.params.id, function(err,rows){
      if(err){
          res.json(err);
      } else{
          res.json(rows);
      }
   });
});


module.exports = router;
