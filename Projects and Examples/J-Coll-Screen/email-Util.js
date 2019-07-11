var nodemailer = require('nodemailer');


module.exports.sendNotificationEmail = (to,subject,message) =>{

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'john.orion.ray@gmail.com',
      pass: 'phantom1237'
    }
  });

var mailOptions = {
  from: 'john.orion.ray@gmail.com',
  to: to,
  subject: subject,
  text: message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}