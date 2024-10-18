import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";


import userRoute from "./route/userRoute.js";


import menuRoutes from './route/menuRoute.js';
import reservationRoutes from './route/reservationRoute.js';

const app = express();

// app.use(
//     cors({
//       origin: ['http://localhost:5173'],
//       methods: ["GET", "POST", "PUT", "DELETE"],
//       credentials: true,
//     })
//   );
app.use(cors({ origin: 'https://pizzanfrontend.vercel.app/' }));

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// connect to mongoDB
mongoose.connect(URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// defining routes
app.use("/api/v1", userRoute);
app.use('/api/v1/menu', menuRoutes);
app.use('/api', reservationRoutes);



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});