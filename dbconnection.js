var mysql=require('mysql');
var connection=mysql.createPool({
	host:'localhost',
	user:'root',
	password: 'usbw',
	database: 'dbecan',
	port: 3307
});
module.exports=connection;