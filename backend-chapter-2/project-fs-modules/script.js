import * as fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const command = process.argv[2];
const target = process.argv[3];
const content = process.argv.slice(4).join(" ");

const targetPath = path.join(__dirname, target);

switch (command) {
    case "mkdir" :
        fs.mkdir(targetPath, { recursive: true }, (err) => {
            if (err) return console.error(err);
            console.log(`Folder created: ${target}`);
        });
        break;
    case "cf" : 
        fs.writeFile(targetPath, '', (err) => {
            if (err) return console.error(err);
            console.log(`File created: ${target}`);
        });
        break;
    case "wf" :
        fs.writeFile(targetPath, content, (err) => {
            if (err) return console.error(err);
            console.log(`File written: ${target}`);
        });
        break;
    case "rf" : 
        fs.readFile(targetPath, 'utf8', (err, data) => {
            if (err) return console.error(err);
            console.log(`File content:\n ${data}`);
        });
        break;
    case "af" :
        fs.appendFile(targetPath, `\n${content}`, (err) => {
            if (err) return console.error(err);
            console.log(`File new line appended: ${target}`);
        });
        break;
    case "list" :
        fs.readdir(target, 'utf8', (err, files) => {
            if (err) return console.error(err);
            console.log(`List of folder or files: ${files}`);
        });
        break;
    case "info" :
        fs.stat(targetPath, (err, stats) => {
            if  (err) return console.error(err);
            console.log(
                `Information for: ${target}\n
                Is file: ${stats.isFile()}\n
                Is directory: ${stats.isDirectory()}\n
                Size (bytes): ${stats.size}\n
                Created at: ${stats.birthtime}\n
                Last modified: ${stats.mtime}`
            );
        });
        break;
    case "rename" :
        fs.rename(targetPath, target, (err) => {
            if (err) return console.error(err);
            console.log(`File renamed: ${target}`);
        });
        break;
    case "delete" :
        fs.unlink(targetPath, (err) => {
            if (err) return console.error(err);
            console.log(`File deleted: ${target}`);
        });
        break;
    case "rmdir" :
        fs.rm(targetPath, {recursive: true, force: true}, (err) => {
            if (err) return console.error(err);
            console.log(`Folder deleted: ${target}`);
        });
        break;
    default:
        console.log('Unknown command!');
};

//! note: This is beginner level cli project. Just one line command and working.