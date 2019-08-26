import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server"; // Configure chai
var expect = chai.expect;
var cookie

chai.use(chaiHttp);
chai.should();
describe("Middleware", () => {
  // Test to check for session cookie
  it("should set the session cookie on the first request", done => {
    chai
      .request(app)
      .get("/login")
      .end((err, res) => {
        cookie = res.header['set-cookie'][0].split(';')[0];
        expect(err).to.be.null;
        expect(res).to.have.cookie('connect.sid');
        done();
      });
  }); 

  // Test to check for session cookie
  it("should not set the session cookie on the next requests", done => {
    chai
      .request(app)
      .get("/login")
      .set('cookie', cookie)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.not.have.cookie('connect.sid');
        done();
      });
  }); 


});