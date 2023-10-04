const db = require('../dbconnection')

var Terms = {
  getAllTerms: (callback) => db.query('select id,term from tbl_terms order by id desc', callback),

  addTerm: (Term, callback) => db.query('Insert into tbl_terms(term) values(?)', [Term.term], callback),

  deleteTerm: (id, callback) => db.query('delete from tbl_terms where id=?', [id], callback),

  updateUser: (id, User, callback) => db.query('update users set usertype=? where id =?', [User.usertype, id], callback),

  getMaxId: (callback) => db.query('select max(id) as maxid from users', callback),
}

module.exports = Terms
