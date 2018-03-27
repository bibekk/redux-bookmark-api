var db = require('../dbconnection');
var Bookmark ={
  getAllBookmarks: function(callback){
      return db.query("SELECT b.id, b.url ,a.cat_id, c.category FROM db_bookmark.tbl_bookmarks  b join tbl_categories c USING(cat_id) ",callback);
  },
  getBookmarkCategory:function(callback){
      return db.query("SELECT  c.cat_id,c.category, COUNT(b.id) AS total FROM tbl_bookmarks b RIGHT JOIN tbl_categories c USING(cat_id) GROUP BY cat_id;",callback);
  },
  getBookmarksByCategory: function(cat_id,callback){
     return db.query("SELECT a.id, a.url,a.cat_id, b.category from tbl_bookmarks a JOIN tbl_categories b using(cat_id) where cat_id=?",[cat_id],callback);
  },
  addBookmark: function(body,callback) {
      return db.query("insert into tbl_bookmarks(url,cat_id) values('"+body.url+"',"+body.cat_id+")",callback)
  },
  addCat: function(data,callback){
      return db.query("Insert into tbl_categories(category) values (?)",[data.category],callback);
  },
  deleteCat:function(id,callback){
      return db.query("DELETE FROM tbl_categories WHERE cat_id=?",[id],callback);
  },
  deleteBookmark: function(id,callback){
      return db.query("DELETE FROM tbl_bookmarks WHERE id=?",[id],callback);
  },




  getSoftwareById: function(id,callback){
      return db.query("SELECT * FROM software.tbl_software WHERE tbl_software_id=?",[id],callback);
  },

  addSoftware: function(Software,callback){ //console.log(Software.id);
      return db.query("Insert into tbl_software(software_id,software_name,software_type) values(?,?,?)",[Software.software_id, Software.software_name, Software.software_type],callback);
  },

  updateSoftwareByID: function(id,Software,callback){ //console.log(id,Software.software_name);
      return db.query("UPDATE tbl_software SET software_name=? WHERE software_id =?",[Software.software_name, id],callback);
  },
  getMaxId:function(callback){
      return db.query("SELECT max(software_id) AS maxid FROM software.tbl_software",callback);
  },

  updateSoftwareCategory: function(id,Software,callback){ //console.log(id,Software.Title,Software.Status);
      return db.query("UPDATE software.tbl_software_type SET software_type=? WHERE tbl_software_typeid =?",[Software.software_type,id],callback);
  },



};

module.exports = Bookmark;
