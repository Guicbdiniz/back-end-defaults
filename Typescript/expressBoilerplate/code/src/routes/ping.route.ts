import express from "express";
import pingController from "../controllers/pingController";

const router = express.Router({});

router.get("/", pingController.getPong);

export default router;
