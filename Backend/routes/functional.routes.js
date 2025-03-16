import express from "express";
import { authMiddleware } from "../Middlewares/authMiddleware.js";

const router = express.Router();
router.get("/dashboard",authMiddleware,(req,res)=>{
    res.json({
        message: "Welcome to your dashboard",
        user: req.user, // User data from the token
      });
})
export default router;