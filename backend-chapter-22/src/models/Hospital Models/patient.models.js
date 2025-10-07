import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({}, {timestamps: true});

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;