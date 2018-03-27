var db = require('../dbconnection');
var Users ={
  getAllUsers: function(callback){
      return db.query("select username,type,usertype from users join usertypes on users.usertype = usertypes.id",callback);
  },
  getUserById: function(id,callback){
      return db.query("select * from users where Id=?",[id],callback);
  },
  addTask: function(Task,callback){ //console.log(Task.id);
      return db.query("Insert into task(Id,Title,Status) values(?,?,?)",[Task.Id, Task.Title, Task.Status],callback);
  },
  deleteTask: function(id,callback){
      return db.query("delete from task where Id=?",[id],callback);
  },
  updateUser: function(id,User,callback){ //console.log(id,Task.Title,Task.Status);
      return db.query("update users set usertype=? where id =?",[User.usertype,id],callback);
  },
  getMaxId:function(callback){
      return db.query("select max(id) as maxid from users",callback);
  }
};

module.exports = Users;


