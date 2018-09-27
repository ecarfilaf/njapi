var express = require('express');
var router = express.Router();
var User=require('../models/Users');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/:id?',function(req,res,next){
	if(req.params.id){
		User.getUserById(req.params.id,function(err,rows){
			if(err){
				res.json(err);
			}
			else{
				res.json(rows);
			}
		});
	}
	else{
		User.getAllUsers(function(err,rows){
			if(err){
				res.json(err);
			}
			else{
				res.json(rows);
			}
		});
	}
});

router.get('/:usuario?',function(req,res,next){
	if(req.params.usuario){
		User.getUserByUser(req.params.usuario,function(err,rows){
			if(err){
				res.json(err);
			}
			else{
				res.json(rows);
			}
		});
	}
});

router.post('/',function(req,res,next){
	User.addUser(req.body,function(err,count){
		if(err){
			res.json(err);
		}
		else{
			res.json(req.body);
		}
	});
});

router.put('/:id',function(req,res,next){
	User.updateUser(req.params.id,req.body,function(err,rows){
		if(err){
			res.json(err);
		}
		else{
			res.json(rows);
		}
	});
});

module.exports = router;
