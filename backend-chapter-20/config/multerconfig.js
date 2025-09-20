const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/image/uploads');
    },
    filename: (req, file, cb) => {
        crypto.randomBytes(12, (err, bytes) => {
            const filename = bytes.toString('hex') + path.extname(file.originalname);
            cb(null, filename);
        });
    }
});

const upload = multer({storage: storage});

module.exports = upload;