// express config
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const nanoid = require('nanoid');

const app = express();

// const routes = require('./routes/routes.js');

// express middleware config

app.use(cors());

// middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}))


// app.use('/', routes);

app.listen(1337, () => {
    console.log('Server is operational on port 1337.');
})