import { sign, verify } from "jsonwebtoken";

const SECRET =
  "AE74B9A2EA09526B4028D711FC39296FDC5AE12D02132D1D32EF99BC501F4206";

const JWT_EXPIRATION = "1h";

export function signPayload(username: string) {
  return sign({ username }, SECRET, {
    expiresIn: JWT_EXPIRATION,
  });
}

export function verifyTokenFromUser(token: string) {
  const decoded = verify(token, SECRET);
  return decoded;
}

export function userIsValid(
  username: string | undefined,
  password: string | undefined
) {
  return username === "correct" && password === "correct";
}
