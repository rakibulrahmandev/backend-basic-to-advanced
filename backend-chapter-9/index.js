import express from 'express';
import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    fs.readdir('./files', (err, files) => {
        if (err) return console.error(err);
        res.render('index', {files: files});
    });
});

app.get('/files/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', (err, filedata) => {
        if (err) return console.error(err);
        res.render('show', {filename: req.params.filename, filedata: filedata}) 
    });
});

app.get('/file/edit/:filename', (req, res) => {
    res.render('edit', {filename: req.params.filename});
});

app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('').toLowerCase()}.txt`, req.body.details, (err) => {
        if (err) return console.error(err);
        res.redirect('/');
    });
});

app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.prev_name}`, `./files/${req.body.new_name}.txt`, (err) => {
        if (err) return console.error(err);
        res.redirect('/');
    });
});

app.listen(8000, () => {
    console.log(`server running on http://localhost:8000`);
});