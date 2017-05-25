	


module.exports = {

	access_token: function(callback) {
		var request = require('request');
		request.post({url:'https://api-sandbox.capitalone.com/oauth2/token', 
		form: {"client_id": "c4d921e8fecc4928a1fb91a6f8229a7d",
			   "client_secret": "6c36e25535ce105894e187b5a5b037a2",
				"grant_type": "client_credentials"}}, function(error,httpResponse,body){

				callback(error,httpResponse,body);

		})
	}

}
