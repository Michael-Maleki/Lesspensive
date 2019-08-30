// express config
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const nanoid = require('nanoid');
const multer = require('multer');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

const routes = require('./routes/routes.js');
const myurl = 'mongodb+srv://lesspensive:Tidefire11@lesspensive-scizd.mongodb.net/test?retryWrites=true&w=majority';
const router = express.Router();


// express middleware config

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware

//-------------------------------------------------

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


// const storage = multer.diskStorage({
//     destination: "./routes/uploads/",
//     filename: function(req, file, cb){
//        cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//     }
//  });

// const upload = multer({
//     storage: storage,
//     limits:{fileSize: 1000000},
//  }).single("myImage");



app.post('/upload', (req, res) => {
  upload(req, res, function (err) {
    console.log("Request ---", req.body);
    console.log("Request file ---", req.file);
    /*Now do whatever you want to do*/

    //

    if (!err) {
      return res.send(200).end();
    }
  })
})

app.listen(1337, () => {
  console.log('Server is operational on port 1337.');
})