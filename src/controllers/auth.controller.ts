import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export const AuthController = {
  signup: async (req: Request, res: Response) => {
    try {
      const user = await AuthService.signup(req.body);
      res.status(201).json({
        message: "User created successfully",
        data: user,
        success: true,
      });
    } catch (err:any) {
      res.status(400).json({ message: err.message, success: false });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const { token, user } = await AuthService.login(email, password);
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3600000, // 1 hour
      });
      res.status(200).json({
        message: "Login successful",
        data: user,
        success: true,
      });
    } catch (err: any) {
      res.status(400).json({ message: err.message, success: false });
    }
  },

  logout: async (req: Request, res: Response) => {
    try {
      res.clearCookie("token", {
        httpOnly: true,
      });
      res.status(200).json({ message: "Logout successful", success: true });
    } catch (err:any) {
      res.status(400).json({ message: err.message, success: false });
    }
  }
};
