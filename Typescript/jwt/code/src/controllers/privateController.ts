import { Request, Response } from "express";

const privateController = {
  getPrivate(_req: Request, res: Response) {
    return res.send("You are authenticated!");
  },
};

export default privateController;
