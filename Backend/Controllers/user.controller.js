import User from "../Models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "yourSecretKey";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        user: {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User created Successfully",
      user: {
        id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error in Signup" });
    console.log(error);
  }
};
export const login = async (req,res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
        return res.status(401).json({ message: "Invalid Credentials" });
    }
    else{
      const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
      console.log("token",token)
        return res.status(200).json({
            message: "Login Successfull",
            token,
            user: {
              id: user._id,
              fullname: user.fullname,
              email: user.email,
            },
          });
    }
  } catch (error) {
    res.status(500).json({ message: "Error in Login" });
    console.log(error);
  }
};

export const logout=async(req,res)=>{
  try {
    res.clearCookie("token"); // Clears authentication token from cookies
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ message: "Logout failed", error });
  }
}
