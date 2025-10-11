import mongoose from 'mongoose';
import chalk from 'chalk';
import { DB_NAME } from '../constants/constants.js';

const connect_db = async () => {
    try {
        const db_connection = await mongoose.connect(process.env.DB_URI.replace('<db_password>', process.env.DB_PASS).replace('<db_name>', DB_NAME));
        console.log(chalk.magenta(`MongoDB Connection Port: ${db_connection.connection.host}`));
    } catch (error) {
        console.log(chalk.red(`Error MongoDB Connection: ${error.message}`));
        process.exit(1);
    };
};

export default connect_db;