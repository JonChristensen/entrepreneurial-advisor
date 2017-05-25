var oauth = require('./create_account_oauth');


oauth.access_token(function(error,httpResponse,body){
	var request = require('request');
		
		console.log('error:', error); // Print the error if one occurred
  		console.log('statusCode:', httpResponse && httpResponse.statusCode); // Print the response status code if a response was received
  			
  		access_token = JSON.parse(body).access_token

  		console.log('access_token:', access_token); // Print the HTML for the Google homepage.


  		var form = {"applicants":[
					    {"applicantRole":"primary",
					     "firstName":"John",
					     "lastName":"Smith",
					     "taxIdType":"SSN",
					     "taxId":"000-00-0001",
					     "dateOfBirth":"1986-01-01",
					     "homeAddress":
					        {"addressLine1":"000 Main St",
					         "city":"Richmond",
					         "stateCode":"VA",
					         "postalCode":"00000"},
					     "primaryPhoneNumber":"1111111111",
					     "backupWithholding":false,
					     "emailAddress":"email@capitalone.com",
					     "citizenshipCountry":"USA",
					     "secondaryCitizenshipCountry":"CAN",
					     "employmentStatus":"Employed",
					     "jobTitle":"Branch Manager",
					     "annualIncome":75000}],
					 "productId":"3000",
					 "fundingDetails":
					    {"fundingType":"fundach",
					     "fundingAmount":100.1,
					     "externalAccountDetails":
					        {"accountNumber":"123456",
					         "bankABANumber":"000234456",
					         "accountOwnership":"primary"}},
					 "termsAndConditions":
					    {"acceptAccountDisclosures":true,
					     "acceptPaperlessAgreement":true,
					     "acceptFraudProtection":true}};

		var options = {
 			 url: 'https://api-sandbox.capitalone.com/deposits/account-applications/',
 			 json: form,
  		     headers: {
				"Accept": "application/json; v=1",
    			"Content-Type" : "application/json",
    			"Authorization" : "bearer " + access_token, 
    			"Cache-Control" : "no-cache"
  			 },
  		};
  		request.post(options,
  			
			
  			function(error,httpResponse,body){
  				console.log('error:', error); // Print the error if one occurred
  				console.log('statusCode:', httpResponse && httpResponse.statusCode); // Print the response status code if a response was received
  				console.log('body:', body); // Print the HTML for the Google homepage.



	})});