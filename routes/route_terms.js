const express = require('express');
const router = express.Router();
const Term = require('../models/Terms');

router.get('/',(req,res,next)=>Term.getAllTerms((err,rows)=>err? res.json(err): res.json(rows)));

router.post('/',(req,res,next)=>Term.addTerm(req.body,(err,count)=>err? res.json(err): res.json(count)));

router.delete('/:id',(req,res,next)=>Term.deleteTerm(req.params.id, (err,rows)=>err? res.json(err): res.json(rows)));

router.get('/maxid',(req,res,next)=>Task.getMaxId((err,count)=>err? res.json(err): res.json(count)));

router.get('/:id',(req,res,next)=>{
  if(req.params.id){
    Task.getUserById(req.params.id, (err,rows)=>err? res.json(err): res.json(rows))
  }
});

router.put('/updateTerm', (req, res) => { 
  Term.updateTerm(req.body, (err, count) => (err ? res.json(err) : res.json(count)))
})

router.put('/:id',(req,res,next)=>Task.updateUser(req.params.id,req.body,(err,rows)=>err? res.json(err): res.json(rows)));

module.exports = router;
