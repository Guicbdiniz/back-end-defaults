import express from "express";
import privateController from "../controllers/privateController";
import { checkAuthentication } from "../middlewares/jwt";

const router = express.Router({});

router.use(checkAuthentication);

router.get("/", privateController.getPrivate);

export default router;
