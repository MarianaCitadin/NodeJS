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
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Enviando um email usando Node.js',
  text: 'Mariana Citadin 2b - uuwy scvh iclp aoqr'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});