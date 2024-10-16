import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./route/userRoute.js";
import orderRoutes from "./route/orderRoute.js";

import menuRoutes from './route/menuRoute.js';
import reservationRoutes from './route/reservationRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/api/v1", userRoute);
app.use("/orders", orderRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api', reservationRoutes);



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});