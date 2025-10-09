import chalk from "chalk";
import connect_db from "./database/db.connect.js";
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

connect_db()
.then(() => {
    const port = process.env.PORT || 8000
    app.listen(port, () => {
        console.log(chalk.blue(`Server is running on http://localhost:${port}`));
    });
})
.catch((err) => {
    console.log(chalk.red(`MongoDB Connection Failed! ${err}`));
});