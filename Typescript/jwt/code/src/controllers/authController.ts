import { Request, Response } from "express";
import { signPayload, userIsValid } from "../auth/jwt";

const authController = {
  authenticate(req: Request, res: Response) {
    const { username, password } = req.body;

    if (userIsValid(username, password)) {
      const token = signPayload(username);
      return res.json({ token: token });
    }

    return res.status(400).send("Username or password is invalid");
  },
};

export default authController;
