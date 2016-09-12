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


	var req = http.request(options, (res) => {
		  res.setEncoding('utf8');
		  res.on('data', (chunk) => {
		     callback(chunk);
		  });
		  res.on('end', () => {
		    console.log('No more data in response.');
		  });
		});

		req.on('error', (e) => {
		  console.log(`problem with request: ${e.message}`);
		});

		// write data to request body
		req.write(postData);
		req.end();
}