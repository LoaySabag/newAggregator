import { Router } from "express";
import {
  registerUser,
  updateUserPreferences,
  getUserById,
} from "../controllers/userController";

const router = Router();

router.post("/register", registerUser);
router.put("/:userId/preferences", updateUserPreferences);
router.get("/:userId", getUserById);

export default router;
