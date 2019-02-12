var pool = require('../dbconnection');
var Terms ={
   getAllTerms: function(callback){
	pool.getConnection(callback)
	    .then(conn => {
	      conn.query("SELECT 1 as val")
	        .then((rows) => {
		  let sqlquery = "select id,term from tbl_terms"
	          return conn.query({rowsAsArray: false, sql: sqlquery});
	      })
	        .then((res) => { return callback(res)} )
	        .catch(err => { console.log(err) })
	
	    }).catch(err => {console.log("not connected") })
       },

  addTerm: function(Term,callback){ //console.log(Task.id);
      return db.query("Insert into tbl_terms(term) values(?)",[Term.term],callback);
  },

  deleteTerm: function(id,callback){
      return db.query("delete from tbl_terms where id=?",[id],callback);
  },

  updateUser: function(id,User,callback){ //console.log(id,Task.Title,Task.Status);
      return db.query("update users set usertype=? where id =?",[User.usertype,id],callback);
  },
  getMaxId:function(callback){
      return db.query("select max(id) as maxid from users",callback);
  }
};

module.exports = Terms;
