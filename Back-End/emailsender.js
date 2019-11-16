var nodemailer = require('nodemailer');
var fs = require('fs');
var os = require('os');

var EMAIL_TRANSPORTER1 = nodemailer.createTransport({
  type: 'smtp',
  host: 'smtp.office365.com',
  // service: 'gmail',
  // host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  tls: {
    rejectUnauthorized: false
  },
  auth: {
    user: 'acis.notifications.noreply@affineanalytics.com',
    pass: '@nalytics@ffin9'
  }
});


function getMailOptionForDevEnv(mailOptions) {

  var updatedMailOptions = mailOptions;
  var username = os.userInfo().username;
  var hrisEmails = [];

  if( username && username.toLowerCase().indexOf("kotresh") !== -1 ) {
    hrisEmails = ['rockey91@gmail.com'];
  } else if( username && username.toLowerCase().indexOf("yogesh") !== -1 ) {
    hrisEmails = ['yogesh24.ds@gmail.com'];
  } else {
    hrisEmails = [
      'yogesh24.ds@gmail.com'
    ];
  }

  updatedMailOptions.to = hrisEmails.join(",");
  updatedMailOptions.cc = "";
  updatedMailOptions.bcc = "";

  updatedMailOptions.subject = "["+ username +": HRIS-Development] " + updatedMailOptions.subject;

  return updatedMailOptions;
}

var emailsender = {

  sendEmail: function(mailObj, args) {

    var mailOptions = mailObj;

    // Check for production environment and modify the recepients if not.
    fs.readFile('/opt/iamhrisproductionserver', 'utf8', function(err, contents) {

      console.log("Check specified to and cc list below. mailOptions:");
      console.log(mailOptions);

      if (err) {
        console.log("Emails: No, I am not the production server. Excluding from sending mails to others.");
        mailOptions = getMailOptionForDevEnv(mailOptions);
        console.log("Check the modified to and cc list below. mailOptions:");
        console.log(mailOptions);

      } else {
        console.log("Yes, I am the production server. Sending mails as specified.");
      }

      EMAIL_TRANSPORTER1.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);

          if ( args.callbackFunction && (typeof args.callbackFunction) == 'function' && args.callbackArgs ) {
            args.callbackFunction( args.callbackArgs, false );
          }

          return false;
        } else {
          console.log('Email sent: ' + info.response);

          if ( args.callbackFunction && (typeof args.callbackFunction) == 'function' && args.callbackArgs ) {
            args.callbackFunction( args.callbackArgs, true );
          }

          return true;
        }
      });

    });

  }
};

module.exports = emailsender;
