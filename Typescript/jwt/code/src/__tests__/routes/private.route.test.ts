import request from "supertest";
import app from "../../app";

const PRIVATE_ROUTE = "/private";
const AUTH_ROUTE = "/authenticate";

describe("Private route", () => {
  test("should return 401 when user is not authenticated", async () => {
    const response = await request(app).get(PRIVATE_ROUTE);
    expect(response.status).toBe(401);
    expect(response.get("WWW-Authenticate")).toMatch(/^Bearer/);
  });

  test("should return 403 when invalid bearer token is sent", async () => {
    const response = await request(app)
      .get(PRIVATE_ROUTE)
      .set({ Authentication: "Bearer asdadjaisj" });
    expect(response.status).toBe(403);
    expect(response.text).toMatch(/invalid token/i);
  });

  test("should return 200 when valid bearer token is sent", async () => {
    const authResponse = await request(app)
      .post(AUTH_ROUTE)
      .send({
        username: "correct",
        password: "correct",
      })
      .set("Content-Type", "application/json");
    expect(authResponse.status).toBe(200);
    expect(authResponse.body.token).toBeDefined();
    const { token } = authResponse.body;

    const response = await request(app)
      .get(PRIVATE_ROUTE)
      .set({
        Authentication: `Bearer ${token}`,
      });
    expect(response.status).toBe(200);
    expect(response.text).toBe("You are authenticated!");
  });
});
