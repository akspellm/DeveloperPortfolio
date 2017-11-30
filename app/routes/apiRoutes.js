var nodemailer = require('nodemailer');
var transporter = require('../credentials.js');

module.exports = function(app) {

var email ="";
app.get('/api/email', function(req, res) {
    (res.json(email))
    
    var mailOptions = {
        from: email.name,
        to: "akspellm@gmail.com",
        subject: 'New email from website',
        text: email.name + " , " + email.email + " , " + email.phone + " , " + email.message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

});

app.post('/api/email', function(req,res) {
    email= req.body;
    res.redirect('/api/email')
})
}
