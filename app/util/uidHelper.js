var http = require('http');

exports.loginByWechat = function(code,callback) {
	var postData = JSON.stringify({"code":code});

	var options = {
		hostname: 'www.xingyunzh.com',
		  	port: 5566,
		  	path: '/clduser/login/wechat',
		  	method: 'POST',
		  	headers: {
		  	  'Content-Type': 'application/x-www-form-urlencoded'
		  	}
	}


	var req = http.request(options, function(res){
		  res.setEncoding('utf8');
		  res.on('data', function(chunk){
		     callback(chunk);
		  });
		  res.on('end', function(){
		    console.log('No more data in response.');
		  });
		});

		req.on('error', function(e){
		  console.log(`problem with request: ${e.message}`);
		});

		// write data to request body
		req.write(postData);
		req.end();
}