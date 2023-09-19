var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marianacitadin@gmail.com',
    pass: 'uuwy scvh iclp aoqr '
  }
});

var mailOptions = {
  from: 'marianacitadin@gmail.com',
  to: 'marianacitadin@gmail.com',
  subject: 'Enviando um email usando Node.js',
  text: 'Isso não é facil!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});