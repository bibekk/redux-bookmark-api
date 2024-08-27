var express = require('express')
var router = express.Router()
var Bookmark = require('../models/Bookmark')

const { Parser } = require('json2csv')
const json2csvParser = new Parser()

router.get('/search', (req, res) => {
  Bookmark.searchData(req.query.searchtext, (err, rows) => (err ? res.json(err) : res.json(rows)))
})

router.get('/searchExact', (req, res) => {
  Bookmark.searchDataExact(req.query.searchtext, (err, rows) => (err ? res.json(err) : res.json(rows)))
})

router.get('/category', (req, res) => {
  Bookmark.getBookmarkCategory((err, rows) => (err ? res.json(err) : res.json(rows)))
})

router.get('/fetchCategoryHierarchy', (req, res) => {
  Bookmark.getCategoryHierarchy((err, rows) => (err ? res.json(err) : res.json(rows)))
})


router.get('/getAllBookmarks', (req, res) => {
  Bookmark.getAllBookmarks((err, rows) => {
    if (err) {
      res.json(err)
    } else {
      /*let arr = []
         let r = rows.forEach(m=>{
           arr.push([m.url, m.cat_id])
         })
         //res.send(arr)*/
      let data = json2csvParser.parse(rows)
      res.send(data)
    }
  })
})

router.get('/getAllCategories', (req, res) => {
  Bookmark.getAllCategories((err, rows) => {
    if (err) {
      res.json(err)
    } else {
      /*let arr = []
         let r = rows.forEach(m=>{
           arr.push([m.cat_id, m.category])
         })*/
      let json2csvParser = new Parser()
      let data = json2csvParser.parse(rows)
      res.send(data)
      // res.send(arr)
    }
  })
})

router.get('/getBookmarksByCategory/:cat_id', (req, res) => {
  //setTimeout(()=>{
  Bookmark.getBookmarksByCategory(req.params.cat_id, (err, rows) => (err ? res.json(err) : res.json(rows)))
  // },1000)
})

router.post('/addBookmark', (req, res) => {
  Bookmark.addBookmark(req.body, (err, count) => (err ? res.json(err) : res.json(count)))
})

router.put('/updateBookmark', (req, res) => {
  Bookmark.updateBookmark(req.body, (err, count) => (err ? res.json(err) : res.json(count)))
})

router.put('/updateBookmarkPin', (req, res) => { //console.log(req.body)
  Bookmark.updateBookmarkPin(req.body, (err, count) => (err ? res.json(err) : res.json(count)))
})

router.post('/addCat', (req, res) => {
  //console.log(req.body);
  //Bookmark.addCat(req.body, (err, count) => (err ? res.json(err) : res.json(count)))
  Bookmark.addCat(req.body, (err, data) =>{
    if(err){
      res.json(err)
    }else{
      //console.log(count.insertId)
      // const body = {prim_cat_id: data.insertId}
      // Bookmark.addCategoryHiererchy(body,(err,data1)=>{
      //   if(data1.affectedRows === 1){
      //     console.log('Hierarchy added')
      //   }
      // })
      res.json(data)
    }
  }) //(err ? res.json(err) : res.json(count)))
})

router.delete('/category/:id', (req, res) => {
  Bookmark.deleteCat(req.params.id, (err, rows) => {
    if(err){
      res.json(err)
    }else{
      res.json(rows)
    }
  })
})

router.put('/updateCat', (req, res) => {
  Bookmark.updateCat(req.body, (err, count) => (err ? res.json(err) : res.json(count)))
})

router.put('/updateCatParent', (req, res) => {
  Bookmark.updateCatParent(req.body, (err, count) => (err ? res.json(err) : res.json(count)))
})

router.delete('/deleteBookmark/:id', (req, res) => {
  Bookmark.deleteBookmark(req.params.id, (err, rows) => (err ? res.json(err) : res.json(rows)))
})

//for pass//
router.post('/getPass', (req, res) => {
  Bookmark.getPass(req.body.password, (err, rows) => (err ? res.json(err) : res.json(rows)))
})

module.exports = router
