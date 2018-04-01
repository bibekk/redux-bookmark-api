var express = require('express');
var router = express.Router();
var Bookmark = require('../models/Bookmark');
/*
router.use(function(req,res,next){
   next();
});
*/


router.get('/category',function(req,res,next){
   Bookmark.getBookmarkCategory(function(err,rows){
      if(err){
          res.json(err);
      } else{
          res.json(rows);
      }
   });
});

router.get('/',function(req,res,next){
    Bookmark.getAllBookmarks(function(err,rows){
          if(err){
              res.json(err);
          } else{
              res.json(rows);
          }
       });
});

router.get('/getBookmarksByCategory/:cat_id',function(req,res,next){
       Bookmark.getBookmarksByCategory(req.params.cat_id,function(err,rows){
          if(err){
              res.json(err);
          } else{
              res.json(rows);
          }
       });
});

router.post('/addBookmark',function(req,res,next){
   Bookmark.addBookmark(req.body,function(err,count){
      if(err){
          res.json(err);
      } else{
          res.json(count);
      }
   });
});

router.put('/updateBookmark',function(req,res,next){
   Bookmark.updateBookmark(req.body,function(err,count){
      if(err){
          res.json(err);
      } else{
          res.json(count);
      }
   });
});

router.post('/addCat',function(req,res,next){ //console.log(req.body);
   Bookmark.addCat(req.body,function(err,count){
      if(err){
          res.json(err);
      } else{
          res.json(count);
      }
   });
});

router.delete('/category/:id',function(req,res,next){
   Bookmark.deleteCat(req.params.id, function(err,rows){
      if(err){
          res.json(err);
      } else{
          res.json(rows);
      }
   });
});

router.put('/updateCat',function(req,res,next){
   Bookmark.updateCat(req.body,function(err,count){
      if(err){
          res.json(err);
      } else{
          res.json(count);
      }
   });
});


router.delete('/:id',function(req,res,next){
   Bookmark.deleteBookmark(req.params.id, function(err,rows){
      if(err){
          res.json(err);
      } else{
          res.json(rows);
      }
   });
});

module.exports = router;
