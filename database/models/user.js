const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "User must have a first Name"],
            trim: true,
            lowercase: true,
        },
        lastName: {
            type: String,
            required: [true, "User must have a last Name"],
            trim: true,
            lowercase: true,
        },
        sex: {
            type: String,
            required: [true, "Sex is required"],
            trim: true,
            lowercase: true,
        },
        email: {
            type: String,
            unique: true,
            required: [true, "User must have an email"],
            trim: true,
            lowercase: true,
        },
        dateOfBirth: {
            type: String,
            required: [true, "User must have a Date of Birth"],
        },
        phoneNumber: {
            type: String,
            required: [true, "User must have a Phone Number"],
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("myUser", userSchema);