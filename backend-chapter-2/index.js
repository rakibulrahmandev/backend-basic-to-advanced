// ? Backend chapter-2. ---------------------------------------------------------------------------------->

// Node.js history and introduction of node.js:
/**
 * 2009 → Ryan Dahl created Node.js. His main goal was to build a way to handle thousands of concurrent connections efficiently, something   traditional web servers (like Apache) struggled with.
 * It was built on Google’s V8 JavaScript engine (used in Chrome), which made JavaScript execution extremely fast.
 * Node.js introduced the event-driven, non-blocking I/O model, making it lightweight and efficient for building scalable network applications
 * 2010–2014 → Node.js gained huge popularity among startups and developers for real-time apps (like chat, streaming).
 * 2015 → A fork called io.js was created due to disagreements in governance, but later merged back into Node.js under the Node.js Foundation.
 * 2019 → Node.js Foundation merged with JS Foundation to form the OpenJS Foundation, ensuring long-term governance.
 * Today → Node.js is widely used for backend development, powering companies like Netflix, LinkedIn, Uber, and many more.
*/

// Installing Node.js and npm:
// Go to this site (https://nodejs.org/en) download node.js and install. NPM by default installed.

// File systems operating:
/**
 * 1. File Reading.
 * 2. File Writing.
 * 3. File Existence & Info.
 * 4. File Deletion & Renaming.
 * 5. Working with Directories.
 * 6. Streams (for large files).
*/

// import module from node.js
import * as fs from 'node:fs';

//* File Reading:
/**
 * fs.readFile → Reads file asynchronously.
 * fs.readFileSync → Reads file synchronously.
*/
// Use case: Reading JSON, text, or config files in your server.

//! fs.readFile:
// Asynchronous:
/* fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) return console.error(`Error reading file: ${err}`);
    console.log(`File content: ${data}`);
}); */

//! fs.readFileSync:
// Synchronous:
/* const data = fs.readFileSync('example.txt', 'utf8');
console.log(data); */

//* File Writing:
/**
 * fs.writeFile → Creates or overwrites a file.
 * fs.writeFileSync → Same but synchronous.
 * fs.appendFile → Adds content at the end of a file.
 * fs.appendFileSync → Same but synchronous.
*/
// Use case: Saving logs, writing user data, or creating reports.

//! fs.writeFile:
// Asynchronous:
/* fs.writeFile('output.txt', 'Rakibul Rahman', (err) => {
    if (err) return console.error(err);
    console.log("File written successfully!");
}); */
// note: write a new file (or overwrite);

//! fs.writeFileSync:
// Synchronous:
/* fs.writeFileSync('output.txt', 'Amy Rahman');
console.log("File written successfully (sync)!"); */

//! fs.appendFile:
// Asynchronous:
/* fs.appendFile('output.txt', '\nAmy Rahman', (err) => {
    if (err) return console.error(err);
    console.log('Content appended!');
}); */

// Synchronous:
/* fs.appendFileSync('output.txt', '\nZainab Rahman Amy');
console.log('Content appended successfully (sync)!'); */

//* File Existence & info:
/**
 * fs.existsSync → Checks if a file exists (deprecated async fs.exists).
 * fs.stat / fs.statSync → Gets file info (size, created date, etc.).
*/
// Use case: Validating uploads or checking if a file already exists.

//! fs.existsSync:
/* const exist = fs.existsSync('output.txt');
console.log(exist ? 'File already exists!' : 'File does not exists!'); */

//! fs.stat:
// Asynchronous:
/* fs.stat('output.txt', (err, stats) => {
    if (err) return console.error(err);
    console.log(`File size: ${stats.size} bytes`);
    console.log(`File created on: ${stats.birthtime}`);
}); */

//! fs.statSync:
// Synchronous:
/* const stats = fs.statSync('output.txt');
console.log(stats.size); */

//* File Deletion & Renaming:
/**
 * fs.unlink → Deletes a file.
 * fs.unlinkSync → Same but synchronous.
 * fs.rename → Renames/moves a file.
 * fs.renameSync → Same but synchronous. 
*/
// Use case: Managing user-uploaded files, cleanup tasks.

//! fs.unlink:
// Asynchronous:
/* fs.unlink('old.txt', (err) => {
    if (err) return console.error(err);
    console.log('File deleted!');
}); */

//! fs.unlinkSync:
// Synchronous:
/* fs.unlinkSync('old.txt');
console.log('File deleted!'); */

//! fs.rename:
// Asynchronous:
/* fs.rename('old.txt', 'new.txt', (err) => {
    if (err) return console.error(err);
    console.log('File renamed!');
}); */

//! fs.renameSync:
// Synchronous:
/* fs.renameSync('new.txt', 'index.txt');
console.log('File renamed!'); */

//* Working with Directories:
/**
 * fs.mkdir / fs.mkdirSync → Creates a folder.
 * fs.readdir / fs.readdirSync → Reads folder contents.
 * fs.rmdir / fs.rmdirSync → Removes a folder (deprecated, now use fs.rm).
 * fs.rm → Deletes files or folders (newer method).
*/
// Use case: Organizing uploads, storing logs, creating project folders dynamically.

//! fs.mkdir:
// Asynchronous:
/* fs.mkdir('index', {recursive: true}, (err) => {
    if (err && err.code === 'EEXIST') return console.error(err);
    console.log("Folder created!");
}); */

/* fs.mkdir('image', { mode: 0o666 }, (err) => {
    if (err && err.code === 'EEXIST') return console.error(err);
    console.log("Folder created!");
}); */

/* fs.mkdir('services', { recursive: true, mode: 0o666}, (err) => {
    if (err && err.code === 'EEXIST') return console.error(err);
    console.log('Folder created!');
}); */

//! fs.mkdirSync:
// Synchronous:
/* fs.mkdirSync('provider', { recursive: true });
console.log('Folder created!'); */

/* fs.mkdirSync('authentication', { mode: 0o666 });
console.log('Folder created!'); */

/* fs.mkdirSync('auth', { recursive: true, mode: 0o666 });
console.log('Folder created!'); */

//! fs.readdir:
// Asynchronous:
/* fs.readdir('.', 'utf8', (err, files) => {
    if (err) return console.error(err);
    console.log("File in current directory:", files); // output; is array format;
}); */

//! fs.readdirSync:
// Synchronous:
/* console.log(fs.readdirSync('.')); // output: is array format; */

//! fs.rm:
// Asynchronous:
/* fs.rm('auth', { recursive: true, force: true }, (err) => {
    if (err) return console.error(err);
    console.log('Folder deleted!');
}); */
// note: recursive: true → delete folders with contents inside. force: true → don’t throw errors if the file/folder doesn’t exist.

//! fs.rmSync:
// Synchronous:
/* fs.rmSync('authentication', { recursive: true, force: true });
console.log('Folder deleted!'); */
// note: recursive: true → delete folders with contents inside. force: true → don’t throw errors if the file/folder doesn’t exist.

//* Streams (for large files):
/**
 * fs.createReadStream → Reads big files chunk by chunk.
 * fs.createWriteStream → Writes big files chunk by chunk. 
*/
// Use case: File uploads, video streaming, large JSON/CSV files.

//! fs.createReadStream:
/* const readStream = fs.createReadStream('./content/video.mp4');

readStream.on("data", (chunk) => {
    console.log('Chunk received:', chunk);
});

readStream.on('end', () => {
    console.log('Finished reading file!');
}); */

//! fs.createWriteStream:
/* const writeStream = fs.createWriteStream('./output.txt');

writeStream.write('Log entry 1\n');
writeStream.write('Log entry 2\n');
writeStream.end('Log entry entry\n');

writeStream.on('finish', () => {
    console.log("All data finished!");
}); */

// todo:
/**
 * As a beginner you don't need to master everything at once. start with this:
 * readFile / writeFile
 * appendFile
 * unlink
 * mkdir / readdir
 * createReadStream / createWriteStream
 * These will cover 90% of what you’ll need when building backend projects.
*/