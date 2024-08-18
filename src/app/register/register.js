import mongoose, { Schema } from "mongoose";

const registerSchema = new Schema({
    teamName: {
        type: String,
        required: [true, "Team Name is required. "],
        trim: true,
        minLength: [2, "Team Name must be larger than 2 characters. "],
        maxLength: [50, "Team Name must be lesser than 50 characters. "],
    },

    teamEmail: {
        type: String,
        required: [true, "Team Email is required. <br>"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid Team Email Address. "],
    },

    teamLeaderName: {
        type: String,
        required: [true, "Team Leader's Name is required. <br>"],
        trim: true,
        minLength: [2, "Team Leader's Name must be larger than 2 characters. "],
        maxLength: [50, "Team Leader's Name must be lesser than 50 characters. "],
    },

    teamLeaderEmail: {
        type: String,
        required: [true, "Team Leader's Email is required. <br>"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid Team Leader's Email Address. "],
    },

    teamleaderscontactNumber: {
        type: String,
        required: [true, "Team Leader's Contact Number is required. "],
        match: [/^[\d]{10}$/i, "Invalid Team Leader's Contact Number. "],
    },

    university: {
        type: String,
        required: [true, "University is required. "],
    },


    teamMember1email: {
        type: String,
        required: [false],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid Team Member Email Address. "],
    },

    teamMember1contactNumber: {
        type: String,
        required: [false],
        match: [/^[\d]{10}$/i, "Invalid Team Member Contact Number. "],
    },


    teamMember2email: {
        type: String,
        required: [false],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid Team Member Email Address. "],
    },

    teamMember2contactNumber: {
        type: String,
        required: [false],
        match: [/^[\d]{10}$/i, "Invalid Team Member Contact Number. "],
    },



    date: {
        type: Date,
        default: Date.now,
    },
});

const Register =
    mongoose.models.Register || mongoose.model("Register", registerSchema);

export default Register;