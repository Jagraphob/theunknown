const request = require('supertest')
const app = require('../server/app')

describe("Testing the API", () => {
  it("tests the base route and returns true for status", async () => {
    const response = await request(app).get('/api/test')

    expect(response.status).toBe(200)
    expect(response.body.test).toBe('abc')
  });
});

afterAll(async done => {
  // Closing the DB connection allows Jest to exit successfully.
  // dbConnection.close();
  app.close()
  done();
});