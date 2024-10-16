// controllers/reservationController.js
import Reservation from '../model/resrvationModel.js';

// Create a new reservation
export const createReservation = async (req, res) => {
    const { date, time, totalGuests, message } = req.body;

    try {
        const reservation = new Reservation({
            date,
            time,
            totalGuests,
            message,
        });

        const savedReservation = await reservation.save();
        res.status(201).json({
            success: true,
            reservation: savedReservation,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create reservation',
            error: error.message,
        });
    }
};

// Get all reservations
export const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json({
            success: true,
            reservations,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve reservations',
            error: error.message,
        });
    }
};
