import express from "express";
import authController from "../controllers/authController";

const router = express.Router({});

router.post("/", authController.authenticate);

export default router;
