import request from "supertest";
import app from "../../app";

describe("Ping route", () => {
  test("should return PONG to GET", async () => {
    const response = await request(app).get("/ping");
    expect(response.status).toBe(200);
    expect(response.text).toBe("PONG!");
  });
});
