// import modules ------------------------------------------------->
import dotenv from 'dotenv';
import connect_db from "./database/db.connect.js";

// dotenv configaration ------------------------------------------->
dotenv.config();

// db func call --------------------------------------------------->
connect_db();