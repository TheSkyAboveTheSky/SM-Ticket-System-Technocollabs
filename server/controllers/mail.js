const nodemailer = require('nodemailer');

const sendMail = async (req,res) => {
  const transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port : 465,
    secure : true,
    auth : {
      user : process.env.GMAIL_USER,
      pass : process.env.GMAIL_PASS
    }
  });
  const mailOptions = {
    from : process.env.GMAIL_USER,
    to: require.body.to,
    subject: req.body.subject,
    text: req.body.body,
  };
  transporter.sendMail(mailOptions, (error) => {
    if(error){
      return console.error(error);
    }
    console.log('Message sent successfully!');
    res.sendStatus(200);
  })
  return res.end();
}
module.exports = sendMail;