import { Request, Response } from "express";
import { StatusCode } from "../constents";
import { Admin } from "../models/userModel";
import { v4 as uuidv4 } from "uuid";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(StatusCode.BAD_REQUEST).json({
        success: false,
        message: "Email and password are required",
      });
      return;
    }

    const user = await Admin.findOne({ email });

    if (!user) {
      res.status(StatusCode.UNAUTHORIZED).json({
        success: false,
        message: "Email not found",
      });
      return;
    }

    if (user.password === password) {
      const sessionToken = uuidv4();
      const expiresAt = Date.now() + 24 * 60 * 60 * 1000;

      res.cookie("session_token", sessionToken, {
        maxAge: expiresAt,
        // httpOnly: true,
      });
      res.status(StatusCode.OK).json({
        success: true,
        message: "Authentication successful",
      });
      return;
    } else {
      res.status(StatusCode.UNAUTHORIZED).json({
        success: false,
        message: "Incorrect password",
      });
      return;
    }
  } catch (error) {
    console.error("Login error:", error);

    res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error",
    });
    return;
  }
};

export const registerAdmin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      res
        .status(StatusCode.BAD_REQUEST)
        .json({ success: false, message: "email and password required" });
    const adminCredential = new Admin({
      email,
      password,
    });
    const savedData = await adminCredential.save();
    if (savedData)
      res
        .status(StatusCode.OK)
        .json({ success: true, message: "registered successfully" });
    else
      res
        .status(StatusCode.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "registratin failed" });
  } catch (error) {
    res
      .status(StatusCode.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error });
  }
};
