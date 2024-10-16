// routes/reservationRoute.js
import express from 'express';
import { createReservation, getReservations } from '../controller/resrvationController.js';

const router = express.Router();

// Define routes
router.post('/reservations', createReservation); // Route to create a reservation
router.get('/reservations', getReservations); // Route to get all reservations

export default router;
