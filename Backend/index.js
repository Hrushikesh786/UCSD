import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.routes.js"
import cors from "cors";
const app = express();


dotenv.config();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
  credentials: true // Allow cookies if using authentication
}));
const port = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;
//Connection to mongodb
try {
    mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((error) => {
      console.error("❌ Error in database connection:", error);
      process.exit(1);
    });
} catch (error) {
  console.log("Error in database Connection:", error);
}

// routes
app.use("/user",userRoute)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
