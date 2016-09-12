var uidHelper = require('../util/uidHelper');

exports.loginByWechat = function(req,res){
	uidHelper.loginByWechat(req.body.code,function(err,result){
		if (err) {
			res.send(err);
		}else{
			console.log('uid result:',result);
			res.send(result);
		}
		
	})
}