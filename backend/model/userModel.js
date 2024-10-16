import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    contactNo: {  // New contact number field
        type: String,
        required: true, // You can change this to false if it's optional
    },
});

const User = mongoose.model("User", userSchema);
export default User;
