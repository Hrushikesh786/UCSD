import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET || "yourSecretKey";

export const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No Token Provided" });
  }

  try {
    // ✅ Verify JWT Token
    const decoded = jwt.verify(token.split(" ")[1], SECRET_KEY);
    console.log("decoded:",decoded)
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
