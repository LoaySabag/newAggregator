import { Request, Response } from "express";
import User from "../models/User";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, preferences, communicationChannel } = req.body;
    const newUser = new User({ email, preferences, communicationChannel });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", userId: newUser._id });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user", details: error });
  }
};

export const updateUserPreferences = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const { preferences } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { preferences },
      { new: true }
    );
    if (updatedUser) {
      res.status(200).json({
        message: "Preferences updated successfully",
        user: updatedUser,
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update preferences", details: error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (user) {
      res.status(200).json({
        email: user.email,
        preferences: user.preferences,
        communicationChannel: user.communicationChannel,
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get user", details: error });
  }
};
