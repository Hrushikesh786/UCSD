import express from "express"
import { login, logout, signup } from "../Controllers/user.controller.js";
import { authMiddleware } from "../Middlewares/authMiddleware.js";
const router=express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout", logout);
router.get("/auth", authMiddleware, (req, res) => {
    res.json({ authenticated: true, user: req.user });
  });
export default router;