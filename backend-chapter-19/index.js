const express = require('express');
const crypto = require('crypto'); 
const path = require('path');
const multer = require('multer');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/image/uploads');
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
        console.log(bytes);
        const filename = bytes.toString('hex') + path.extname(file.originalname);
        cb(null, filename);
    });
  }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.render('upload');
});

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
});

app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
});