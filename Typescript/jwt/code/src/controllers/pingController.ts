import { Request, Response } from "express";

const pingController = {
  getPong(_req: Request, res: Response) {
    return res.send("PONG!");
  },
};

export default pingController;
