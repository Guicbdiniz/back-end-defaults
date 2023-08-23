import { NextFunction, Request, Response } from "express";
import { verifyTokenFromUser } from "../auth/jwt";

const VALID_BEARER_REGEX = /^Bearer \S+$/i;

export function checkAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authenticationHeader = req.get("Authentication");
  if (
    !authenticationHeader ||
    !authenticationHeader.match(VALID_BEARER_REGEX)
  ) {
    return res.status(401).set("WWW-Authenticate", "Bearer").send();
  }
  const token = authenticationHeader.split(" ")[1];
  if (!isValid(token)) {
    return res.status(403).send("Invalid token");
  }
  next();
}

function isValid(token: string) {
  try {
    const payload = verifyTokenFromUser(token);
    return true;
  } catch (error) {
    console.log("Error captured while verifying JWT token: ", error);
    return false;
  }
}
