// import modules ------------------------------------------------->
import express from 'express';
import 'dotenv/config';

// create app ----------------------------------------------------->
const app = express();

// declare route -------------------------------------------------->
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Sever Deployment Successfully!'
    });
});

export default app;