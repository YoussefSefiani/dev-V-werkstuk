require("dotenv").config();
const supertest = require("supertest");
const app = require("../src/server");
const request = supertest(app);
const assert = require("assert");

//////////////////////////////////////// INFLUENCERS TESTS ////////////////////////////////////////

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

describe("GET /influencers", function () {
  it("responds with json", function (done) {
    request
      .get("/influencers/1")
      .expect(200)
      .then((response) => {
        const { id, first_name, last_name } = response.body[0];
        console.log(response.body[0]);
        assert.strictEqual(id, 1);
        assert.strictEqual(first_name, "John");
        assert.strictEqual(last_name, "Dzz");
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

//////////////////////////////////////// PAYMENTS TEST ////////////////////////////////////////

describe("[GET] /payments", function () {
  it("responds with json and status 200", function (done) {
    request
      .get("/payments")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});

describe("GET /payments", function () {
  it("should responds with json of one single payment", function (done) {
    request
      .get("/payments/3")
      .expect(200)
      .then((response) => {
        console.log(response.body);
        const { id, amount, influencer_id, brand_id } = response.body[0];
        console.log(response.body[0]);
        assert.strictEqual(id, 3);
        assert.strictEqual(amount, 500);
        assert.strictEqual(influencer_id, "3");
        assert.strictEqual(brand_id, "3");
        done();
      })

      .catch((err) => done(err));
  });
});

describe("POST /payment", function () {
  it("should post payment and return status", function (done) {
    request
      .post("/payments")
      .send({
        influencer_id: "3",
        brand_id: "4",
        amount: 5555,
      })
      .set("Accept", "application/json")
      .expect(200, { message: `payment in db` }, done);
  });
});

describe("POST /payment", function () {
  it("should post payment and return error status", function (done) {
    request
      .post("/payments")
      .send({
        influencer_id: "15",
        brand_id: "34",
        amount: 5555,
      })
      .set("Accept", "application/json")
      .expect(404, done);
  });
});

describe("edit /payment", function () {
  it("should edit influencer and return status", function (done) {
    const name = "Edited";
    const lastName = "Name";
    const id = 1;
    request
      .put(`/payments/${id}`)
      .send({
        influencer_id: 3,
        brand_id: 2,
        amount: 500,
      })
      .set("Accept", "application/json")
      .expect(
        200,
        {
          message: `payment with id ${id} changed`,
        },
        done
      );
  });
});

describe("DELETE /payment/:id", function () {
  let id;
  test("should get last payment, return id and delete him.", function (done) {
    request
      .get("/last-payment")
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

//////////////////////////////////////// BRAND TEST ////////////////////////////////////////

describe("[GET] /brands", function () {
  it("responds with json and status 200", function (done) {
    request
      .get("/brands")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
