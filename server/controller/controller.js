var userModel = require('../models/user');
let controller = {};

controller.add = function(req,res){
	console.log(req.body);
	var user = new userModel(req.body);
	user.save(function(err,savedUser){
		//console.log(err,user);
		res.status(200).send(savedUser);
		console.log("body",savedUser);
	})

}

controller.addUser = function(req,res){
	console.log(req.body);
	var user = new userModel(req.body);
	user.save(function(err,savedUser){
		//console.log(err,user);
		res.status(200).send(savedUser);
		console.log("body",savedUser);
	})

}

controller.get= function(req,res){
	userModel.find( { }, function (err, foundUser) {
		if (err){
			return next(err);
		}
		//console.log("found SUer ===>" , foundUser);
		res.status(200).send(foundUser);

	})
}
controller.getById=function(req,res){

	userModel.findOne({_id: req.params.id},function(err,foundUser)
	{
		res.status(200).send(foundUser);
	})
}

controller.delete = function(req,res){


	userModel.findOneAndDelete({_id: req.params.id},function(err,duser){
		console.log(err,duser);
		res.status(200).send(duser);
	})
}

controller.update = function(req,res){


	userModel.findByIdAndUpdate({_id: req.params.id},req.body,{upsert:true},function(err,uuser){
		console.log(uuser);
		res.status(200).send(uuser);
	})
}
controller.login = function(req,res){

	userModel.findOne({ username: req.body.username,password:req.body.password}, function(err, user) {
		
		console.log(err);
		if(err) 
			return res.status(500).send();
		if(!user)
			return res.status(404).send();
		console.log("login", user);
		res.send(user);
		

})

}

module.exports = controller;