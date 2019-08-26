// Import the dependencies for testing
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server"; // Configure chai
var expect = chai.expect;
var cookie

chai.use(chaiHttp);
chai.should();
describe("Login", () => {
  
  // Test to delete login cookie
  it("should not allow to remove the cookie for undefined session", done => {
    chai
      .request(app)
      .delete("/login")
      .end((err, res) => {
        cookie = res.header['set-cookie'][0].split(';')[0];
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        expect(res).to.be.text;
        done();
      });
  }); 

  // Test to delete login cookie
  it("should not allow to remove the cookie for inexistent session", done => {
    chai
      .request(app)
      .delete("/login")
      .set('cookie', cookie)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        expect(res).to.be.text;
        done();
      });
  }); 
  
  // Test to get login form
  it("should get login form correctly", done => {
    chai
      .request(app)
      .get("/login")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      });
  }); 
  
  // Test to get login ok
  it("should get a login with correct json credentials", done => {
    chai
      .request(app)
      .post("/login")
      .set('cookie', cookie)
      .send({user: "user", password: "pwd"})
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      });
  });

    // Test to get login ok
    it("should get a login with correct form credentials", done => {
      chai
        .request(app)
        .post("/login")
        .type('form')
        .send({'user': "user", 'password': "pwd"})
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          done();
        });
    });
  
  // Test to delete login cookie
  it("should remove the cookie for logged session", done => {
    chai
      .request(app)
      .delete("/login")
      .set('cookie', cookie)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  }); 

    // Test to delete login cookie
    it("should not remove the cookie for deleted session", done => {
      chai
        .request(app)
        .delete("/login")
        .set('cookie', cookie)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        });
    }); 
  
  // Test to get single student record
  it("should not get a single student record", done => {
    const id = 5;
    chai
      .request(app)
      .get(`/${id}`)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});