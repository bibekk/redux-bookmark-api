var db = require('../dbconnection');
var Bookmark ={
  getAllBookmarks: function(callback){
      return db.query("SELECT b.id, b.url ,a.cat_id, c.category FROM db_bookmark.tbl_bookmarks  b join tbl_categories c USING(cat_id) order by c.category",callback);
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
  },
  getPass: function(pass,callback){
       return db.query("select count(*) as total from tbl_session where id =2 and pass = ?", [pass],callback)
   },
   searchData: function(searchtext,callback){
    return db.query("select * from tbl_bookmarks where url like  '%"+searchtext+"%'",callback)
}
};

module.exports = Bookmark;
