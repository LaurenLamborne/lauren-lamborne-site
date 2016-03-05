var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

var sendMail = function(req, res) {

    var data = req.body;
    transporter.sendMail({
        from: 'laurenlouann@gmail.com',
        to: 'laurenlouann@gmail.com',
        subject: 'Message from ' + data.name,
        text: [
          data.email,
          data.name,
          data.msg
        ].join('\n')
    });
    res.json(data);
};

module.exports = sendMail;
