var uidHelper = require('../util/uidHelper');

exports.loginByWechat = function(req,res){
	uidHelper.loginByWechat(req.body.code,function(err,result){
		res.send(result);
	})
}