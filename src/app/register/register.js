import mongoose, { Schema } from "mongoose";

const registerSchema = new Schema({
    teamName: {
        type: String,
        required: [true, "Team Name is required."],
        trim: true,
        minLength: [2, "Name must be larger than 2 characters"],
        maxLength: [50, "Name must be lesser than 50 characters"],
    },

    teamEmail: {
        type: String,
        required: [true, "Team Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    teamLeaderName: {
        type: String,
        required: [true, "Team Leader's Name is required."],
        trim: true,
        minLength: [2, "Name must be larger than 2 characters"],
        maxLength: [50, "Name must be lesser than 50 characters"],
    },

    teamLeaderEmail: {
        type: String,
        required: [true, "Team Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    teamleaderscontactNumber: {
        type: String,
        required: [true, "Team Leader's Contact Number is required."],
        match: [/^[\d]{10}$/i, "Invalid Contact Number"],
    },

    university: {
        type: String,
        required: [true, "University is required."],
    },

    teamMember1: {
        type: String,
        required: [true, "Team Leader's Name is required."],
        trim: true,
        minLength: [2, "Name must be larger than 2 characters"],
        maxLength: [50, "Name must be lesser than 50 characters"],
    },

    teamMember1email: {
        type: String,
        required: [true, "Team Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    teamMember1contactNumber: {
        type: String,
        required: [true, "Team Leader's Contact Number is required."],
        match: [/^[\d]{10}$/i, "Invalid Contact Number"],
    },

    teamMember2: {
        type: String,
        required: [true, "Team Leader's Name is required."],
        trim: true,
        minLength: [2, "Name must be larger than 2 characters"],
        maxLength: [50, "Name must be lesser than 50 characters"],
    },

    teamMember2email: {
        type: String,
        required: [true, "Team Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    teamMember2contactNumber: {
        type: String,
        required: [true, "Team Leader's Contact Number is required."],
        match: [/^[\d]{10}$/i, "Invalid Contact Number"],
    },

    teamMember3: {
        type: String,
        required: [true, "Team Leader's Name is required."],
        trim: true,
        minLength: [2, "Name must be larger than 2 characters"],
        maxLength: [50, "Name must be lesser than 50 characters"],
    },

    teamMember3email: {
        type: String,
        required: [true, "Team Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    teamMember3contactNumber: {
        type: String,
        required: [true, "Team Leader's Contact Number is required."],
        match: [/^[\d]{10}$/i, "Invalid Contact Number"],
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

const Register =
    mongoose.models.Register || mongoose.model("Register", registerSchema);

export default Register;