var pool = require('../dbconnection');
var Bookmark ={
  getAllBookmarks: function(callback){
	pool.getConnection(callback)
	    .then(conn => {
	      conn.query("SELECT 1 as val")
	        .then((rows) => {
		  let sqlquery = "SELECT b.id, b.url ,b.cat_id, c.category FROM bookmarks_db.tbl_bookmarks  b join tbl_categories c USING(cat_id) order by c.category"
	          return conn.query({rowsAsArray: false, sql: sqlquery});
	      })
	        .then((res) => { return callback(res)} )
	        .catch(err => { console.log(err) })
	
	    }).catch(err => {console.log("not connected") })
       },

  getBookmarkCategory: function(callback){
	pool.getConnection(callback)
	    .then(conn => {
	      conn.query("SELECT 1 as val")
	        .then((rows) => {
		  let sqlquery = "SELECT  c.cat_id,c.category, COUNT(b.id) AS total FROM tbl_bookmarks b RIGHT JOIN tbl_categories c USING(cat_id) GROUP BY cat_id order by c.category;"
	          return conn.query({rowsAsArray: false, sql: sqlquery});
	      })
	        .then((res) => { return callback(res)} )
	        .catch(err => { console.log(err) })
	
	    }).catch(err => {console.log("not connected") })
       }, 

   getPass: function(pass,callback){
	pool.getConnection(callback)
	    .then(conn => {
	      conn.query("SELECT 1 as val")
	        .then((rows) => {
		  let sqlquery = "select count(*) as total from tbl_session where id =4 and pass ='"+pass+"'"
	          return conn.query({rowsAsArray: false, sql: sqlquery});
	      })
	        .then((res) => { return callback(res)} )
	        .catch(err => { console.log(err) })
	
	    }).catch(err => {console.log("not connected") })
       }, 

  //add bookmark
   addBookmark: function(body,callback){
	pool.getConnection(callback)
	    .then(conn => {
	      conn.query("SELECT 1 as val")
	        .then((rows) => {
		  return conn.query("insert into tbl_bookmarks(url,cat_id) values('"+body.url+"',"+body.cat_id+")")
	      })
	        .then((res) => { return callback(res)} )
	        .catch(err => { console.log(err) })
	
	    }).catch(err => {console.log("not connected") })
       }, 

//update bookmark
   updateBookmark: function(body,callback){
	pool.getConnection(callback)
	    .then(conn => {
	      conn.query("SELECT 1 as val")
	        .then((rows) => {
		  return conn.query("update  tbl_bookmarks set url=?, cat_id=? where id = ?",[body.url,body.cat_id,body.id])
	      })
	        .then((res) => { return callback(res)} )
	        .catch(err => { console.log(err) })
	
	    }).catch(err => {console.log("not connected") })
       }, 


   getBookmarksByCategory: function(cat_id,callback){
	pool.getConnection(callback)
	    .then(conn => {
	      conn.query("SELECT 1 as val")
	        .then((rows) => {
		  let sqlquery = "SELECT a.id, a.url,a.cat_id, b.category from tbl_bookmarks a JOIN tbl_categories b using(cat_id) where cat_id=" + cat_id + " order by a.id desc"
	          return conn.query({rowsAsArray: false, sql: sqlquery});
	      })
	        .then((res) => { return callback(res)} )
	        .catch(err => { console.log(err) })
	
	    }).catch(err => {console.log("not connected") })
       }, 

    addCat: function(data,callback){
	pool.getConnection(callback)
	    .then(conn => {
	      conn.query("SELECT 1 as val")
	        .then((rows) => {
		  return conn.query("Insert into tbl_categories(category) values(?)", [data.category])
	      })
	        .then((res) => { return callback(res)} )
	        .catch(err => { console.log(err) })
	
	    }).catch(err => {console.log("not connected") })
       }, 

   //delete Category
   deleteCat: function(cat_id,callback){
	pool.getConnection(callback)
	    .then(conn => {
	      conn.query("SELECT 1 as val")
	        .then((rows) => {
		  return conn.query("DELETE FROM tbl_categories WHERE cat_id=?",[cat_id])
	      })
	        .then((res) => { return callback(res)} )
	        .catch(err => { console.log(err) })
	
	    }).catch(err => {console.log("not connected") })
       }, 

    //updateCat
   updateCat: function(data,callback){
	pool.getConnection(callback)
	    .then(conn => {
	      conn.query("SELECT 1 as val")
	        .then((rows) => {
		  return conn.query("update  tbl_categories set category=? where cat_id = ?",[data.category,data.cat_id])
	      })
	        .then((res) => { return callback(res)} )
	        .catch(err => { console.log(err) })
	
	    }).catch(err => {console.log("not connected") })
       },  
  //delete BM
       deleteBookmark: function(id,callback){
	pool.getConnection(callback)
	    .then(conn => {
	      conn.query("SELECT 1 as val")
	        .then((rows) => {
		  return conn.query("DELETE FROM tbl_bookmarks WHERE id=?",[id]);
	      })
	        .then((res) => { return callback(res)} )
	        .catch(err => { console.log(err) })
	
	    }).catch(err => {console.log("not connected") })
       }, 


 
};

module.exports = Bookmark;


/*     
      
  },
  getBookmarkCategory:function(callback){
      return db.query("SELECT  c.cat_id,c.category, COUNT(b.id) AS total FROM tbl_bookmarks b RIGHT JOIN tbl_categories c USING(cat_id) GROUP BY cat_id order by c.category;",callback);
  },
  getBookmarksByCategory: function(cat_id,callback){
     return db.query("SELECT a.id, a.url,a.cat_id, b.category from tbl_bookmarks a JOIN tbl_categories b using(cat_id) where cat_id=? order by a.id desc",[cat_id],callback);
  },
  addBookmark: function(body,callback) {
      return db.query("insert into tbl_bookmarks(url,cat_id) values('"+body.url+"',"+body.cat_id+")",callback)
  },
  updateBookmark: function(body,callback) {
      return db.query("update  tbl_bookmarks set url=?, cat_id=? where id = ?",[body.url,body.cat_id,body.id],callback)
  },
  addCat: function(data,callback){
      return db.query("Insert into tbl_categories(category) values (?)",[data.category],callback);
  },
  deleteCat:function(id,callback){
      return db.query("DELETE FROM tbl_categories WHERE cat_id=?",[id],callback);
  },
  updateCat: function(body,callback) {
      return db.query("update  tbl_categories set category=? where cat_id = ?",[body.category,body.cat_id],callback)
  },
  deleteBookmark: function(id,callback){
      return db.query("DELETE FROM tbl_bookmarks WHERE id=?",[id],callback);
  },*/
