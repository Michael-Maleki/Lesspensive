const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');

const fs = require('fs');
const nanoid = require('nanoid');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require("path");

const routes = require('./routes/routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//------------------------------------------------- MULTER STORAGE

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("myFile");

//------------------------------------------------- AXIOS POST REQUEST

app.post('/upload', (req, res) => {
  upload(req, res, function (err) {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file);
    /*Now do whatever you want to do*/

    var img = fs.readFileSync(req.file.path);

    var encode_image = img.toString("base64");


    main(encode_image).catch(console.error);

    if (!err) {
      return res.sendStatus(200).end();
    }
  })
})

//------------------------------------------------- NODEMAILER

// async..await is not allowed in global scope, must use a wrapper
async function main(photo) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: "maleki.webdev@gmail.com",
      pass: "lnermzumajbfvyyg"
    }
  });

  // console.log(__dirname)

  Attachement = {

    filename: 'test.png',
    content: photo,
    encoding: 'base64' // optional, would be detected from the filename
  }

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Lesspensive.com" <www.lesspensive.com>', // sender address
    to: 'contact@lesspensive.com', // list of receivers
    subject: 'Lesspensive Room Request', // Subject line
    text: 'A request has been sent by <a user>', // plain text body
    html: '<b>A request has been sent by a user</b>', // html body
    attachments: Attachement
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//------------------------------------------------- PORT LISTENER

app.listen(1337, () => {
  console.log('Server is operational on port 1337.');
})