// ? Backend chapter-4. ---------------------------------------------------------------------------------->

//* Express.js fundamentals:
/**
 * Introduction to Express.js.
 * Server setup.
 * Routing.
 * Middleware.
 * Request and response handling.
 * Error handling.
*/

//! Introduction to Express.js:
// What is Express.js: Express.js is a fast, lightweight, and flexible web framework for Node.js. It helps you build web applications and APIs easily. Instead of writing everything manually with Node’s http module, Express gives you shortcuts for routes, middleware, requests, responses, error handling, etc.

// Why use Express.js: Simple and minimal to start with. Handles routing (GET, POST, PUT, DELETE, etc.) easily. Supports middleware (functions that run between request and response). Integrates with databases (MongoDB, MySQL, etc.). Large ecosystem (thousands of packages like cors, morgan, body-parser, etc.).


//! Server setup:
import express from 'express';

const app = express();

// Routing:
app.get('/', (req, res) => {
    res.send('Hello, from Express.js');
});

// Middleware:
app.use((req, res, next) => {
    console.log('middleware checking!');
    next();
});

// Error handling:
app.get('/error', function(req, res, next){
    return next(new Error('Something goes wrong!'));
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// server start:
app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});