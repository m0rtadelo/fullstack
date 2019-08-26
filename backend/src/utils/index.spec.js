import chai from "chai";

import utils from './index';

var expect = chai.expect;
const resMock = {
    sendStatus: function(param) {}
}
const reqMock = {
    session: {
        user: {}
    }
}

describe("Utils", () => {

    it("should check correcly if valid item is true", () => {
        expect(utils.isValidItem({})).to.be.true
    })

    it("should check correcly if valid item is false", () => {
        expect(utils.isValidItem(null, resMock)).to.be.false
    })

    it("should allow authorized requests", () => {
        expect(utils.isAuthorized(reqMock, resMock)).to.be.true
    })

    it("should not allow unauthorized requests", () => {
        reqMock.session = {}
        expect(utils.isAuthorized(reqMock, resMock)).to.be.false
    })

});