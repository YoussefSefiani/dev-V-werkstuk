require("dotenv").config();
const supertest = require("supertest");
const app = require("../src/server");
const request = supertest(app);
const assert = require("assert");

describe("[GET] /influencers", function () {
  it("responds with json and status 200", function (done) {
    request
      .get("/influencers")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});

describe("GET /influencer", function () {
  it("responds with json", function (done) {
    request
      .get("/influencers/20")
      .expect(200)
      .then((response) => {
        const { id, first_name, last_name } = response.body[0];
        assert(id, 1);
        assert(first_name, "John");
        assert(last_name, "Dzz");
        done();
      })
      .catch((err) => done(err));
  });
});

describe("POST /influencer", function () {
  it("should post influencer and return status", function (done) {
    const name = "Integration";
    const lastName = "Test";
    request
      .post("/influencers")
      .send({
        first_name: name,
        last_name: lastName,
        birth_date: "01/03/2002",
        email: "integration@test.com",
        description: false,
        iban: "BE12 3456 7891 4444",
      })
      .set("Accept", "application/json")
      .expect(
        200,
        {
          message: `influencer ${name} ${lastName} in db`,
        },
        done
      );
  });
});

describe("POST /influencer", function () {
  it("should post influencer and return status", function (done) {
    const name = "Integration";
    const lastName = "Test";
    request
      .post("/influencers")
      .send({
        email: "integration@test.com",
        description: false,
        iban: "BE12 3456 7891 4444",
      })
      .set("Accept", "application/json")
      .expect(
        401,
        {
          message:
            "Could not add influencer to db. Missing fields: first_name, last_name, birth_date.",
        },
        done
      );
  });
});

describe("edit /influencer", function () {
  it("should edit influencer and return status", function (done) {
    const name = "Edited";
    const lastName = "Name";
    request
      .put("/influencers/3")
      .send({
        first_name: name,
        last_name: lastName,
        birth_date: "01/03/2002",
        email: "integration@test.com",
        description: false,
        iban: "BE12 3456 7891 4444",
      })
      .set("Accept", "application/json")
      .expect(
        200,
        {
          message: `influencer with id 3 changed`,
        },
        done
      );
  });
});

describe("DELETE /influencer/:id", function () {
  let id;
  test("should get last influencer and return id", function (done) {
    request
      .get("/last-influencer")
      .expect(200)
      .then((response) => {
        id = response.body.lastId;
        console.log("hereeee kd", id);
        done();
      })
      .then(() => {
        request
          .delete(`/influencers/${id}`)
          .set("Accept", "application/json")
          .expect(
            200,
            {
              message: `Influencer with id ${id} deleted.`,
            },
            done
          );
      });
  });
});
