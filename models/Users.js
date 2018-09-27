var db=require('../dbconnection'); //reference of dbconnection.js

var User={

	getAllUsers:function(callback){
		return db.query("Select * from User",callback);
	},
	getUserById:function(id,callback){
		return db.query("select * from User where Id=?",[id],callback);
	},
	addUser:function(User,callback){
		return db.query("Insert into User values(?,?,?)",[User.Id,User.Title,User.Status],callback);
	},
	deleteUser:function(id,callback){
		return db.query("delete from User where Id=?",[id],callback);
	},
	updateUser:function(id,User,callback){
		return db.query("update User set Title=?,Status=? where Id=?",[User.Title,User.Status,id],callback);
	}
};
module.exports=User;
