const assert = require('assert');

function testGet(chai, server, url, next) {
    chai.request(server)
        .get(url)
        .set("Content-Type", "application/json")
        .end(function (err, res) {
            res.should.have.status(200);
            next(res)
        });
}

module.exports.testGet = testGet

function testGetFail(chai, server, url, next) {
    chai.request(server)
        .get(url)
        .set("Content-Type", "application/json")
        .end(function (err, res) {
            assert.strictEqual(res.status >= 400, true)
            next(res)
        });
}

module.exports.testGetFail = testGetFail
