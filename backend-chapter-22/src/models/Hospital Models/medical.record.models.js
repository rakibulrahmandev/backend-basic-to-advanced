import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    diagonsedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Non-Binary", "Transgender", "Other", "Prefer not to say"],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, {timestamps: true});

const MedicalRecord = mongoose.model('Medical', medicalRecordSchema);
export default MedicalRecord;