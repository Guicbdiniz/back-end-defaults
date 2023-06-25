import express from "express";
import pingRouter from "./routes/ping.route";

const app = express();

app.use("/ping", pingRouter);

export default app;
