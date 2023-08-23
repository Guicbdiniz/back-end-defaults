import express from "express";
import { json as jsonParser } from "body-parser";
import pingRouter from "./routes/ping.route";
import privateRouter from "./routes/private.route";
import authRouter from "./routes/auth.route";

const app = express();

app.use(jsonParser());

app.use("/ping", pingRouter);
app.use("/private", privateRouter);
app.use("/authenticate", authRouter);

export default app;
