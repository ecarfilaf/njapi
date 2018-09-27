var db=require('../dbconnection'); //reference of dbconnection.js

var User={

	getAllUsers:function(callback){
		return db.query("Select * from Usuarios",callback);
	},
	getUserById:function(id,callback){
		return db.query("select * from Usuarios where Id=?",[id],callback);
	},
	getUserByUser:function(usuario,callback){
		return db.query("select * from Usuarios where Usuario=?",[usuario],callback);
	},
	addUser:function(User,callback){
		return db.query("Insert into Usuarios values(?,?,?,?,?,?)",[User.Id,User.Nombre,User.Apellido,User.Email,User.Usuario,User.Clave],callback);
	},
	deleteUser:function(id,callback){
		return db.query("delete from Usuarios where Id=?",[id],callback);
	},
	updateUser:function(id,User,callback){
		return db.query("update Usuarios set Nombre=?,Apellido=? where Id=?",[User.Nombre,User.Apellido,id],callback);
	}
};
module.exports=User;
