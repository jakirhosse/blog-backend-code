import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blog.routes.js";

dotenv.config();
const app = express();

app.use(express.json()); // To parse JSON request bodies

// Connect to Database
connectDB();

// Routes
app.use("/api", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
