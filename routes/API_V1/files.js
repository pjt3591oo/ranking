/**
 * Created by bagjeongtae on 2017. 3. 26..
 */
const express = require('express');
const fs = require('fs');
const router = express.Router();

const fileUpload = require('../../utils/file');

const frogUpload = fileUpload.fields([{name: 'frogSingle', maxCount: 10}, {name: 'frogArray', maxCount: 10}]);

// 1. 파일 업로드 페이지
// 2. 파일 업로드 하기

router.get('/', (req, res)=>{
    fs.readFile('views/file.html', (err, data) => {
        res.writeHead(200, {'content-type': 'text/html'})
        res.end(data);
    });
})

router.post('/',
    frogUpload,    
    (req, res)=>{
        res.end('file upload');
})


module.exports = router;