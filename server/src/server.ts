import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from "dotenv";
import customerRoutes from "./routes/customer.routes.ts";
import userRoutes from "./routes/user.routes.ts";

const app = express();
const prisma = new PrismaClient();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: '*', // Allow all origins for development
}));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/customers', customerRoutes);
app.use('/api/users', userRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running successfully'
  });
});


async function connectDatabase() {
    try {
        await prisma.$connect();
        console.log('Connected to Database');
    } catch (error) {
        console.error('Error connecting to database', error);
    }
}

connectDatabase();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);

});
