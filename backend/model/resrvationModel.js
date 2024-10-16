// models/reservationModel.js
import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    totalGuests: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;
