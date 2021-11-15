require("dotenv").config();
const supertest = require("supertest");
const app = require("../src/server");
const request = supertest(app);
describe("GET /influencers", function () {
  it("responds with json", function (done) {
    request
      .get("/influencers")
      .expect(200)
      .then((response) => {
        // console.log(response.body);
        done();
      })
      .catch((err) => done(err));
  });
});
