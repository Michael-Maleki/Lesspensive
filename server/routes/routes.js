const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const nanoid = require('nanoid');

const id = nanoid();
const images = './uploads/uploads.json';


// router.post('/upload', (req, res) => {
//     const {
//         name,
//     } = req.body;
//     const newImage = {
//         id,
//         name,
//     };
// });




module.exports = router;