// alexa-cookbook sample code

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the entire file contents as the code for a new Lambda function,
//  or copy & paste section #3, the helper function, to the bottom of your existing Lambda code.


// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

// from the lambda, choose Action > Configure Test Event > Alexa Intent - Recipe
var slotName = "Item";
var bankAccountStarter = require('./bank_account_starter');

// 2. Skill Code =======================================================================================================

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
    // alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', "Would you like to go ahead and setup your account?");
    },
    'Unhandled': function () {
        //this.emit(':tell', 'good job team!');
        //this.handler.state = GAME_STATES.START;
        //this.emit(':tell', 'you have 22 bucks');
        //this.handler.state = GAME_STATES.START;
        // call the CapitalOne function 
        var self = this;
        bankAccountStarter.create_account(function(error, response, body) {
            console.log("Just trying to log something.  Anything.")
            //console.log('error:', error); // Print the error if one occurred
            //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log(body)
        
            self.emit(':tell', 'Your application was ' + body.applicationStatus + ' and your new account number is ' + body.bankABANumber); // Print the HTML for the Google homepage.
            
        });
        // inform user the new account number
        /*var speechOutput;
        var intent = this.event.request.intent.name;

        var slotValue = isSlotValid(this.event.request, slotName); //slot value or false
        if  (slotValue) {
            //slot has a valid value
            speechOutput="Intent " + intent + ", slot " + slotName + ", is " + slotValue;
        } else {
            //no valid slot
            speechOutput="Intent " + intent + ", did not get a value for " + slotName;
        }
        this.emit(':tell', speechOutput);*/
    }
};


//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================


function isSlotValid(request, slotName){
        var slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        var slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}


 
