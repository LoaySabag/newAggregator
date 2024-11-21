import { Router } from "express";
import { requestNews, processNewsRequest } from "../controllers/newsController";

const router = Router();

router.post("/fetch", requestNews);
router.post("/newsrequests", processNewsRequest);

export default router;
