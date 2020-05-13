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
            assert.strictEqual(res.status >= 400 && res.status < 500, true)
            next(res)
        });
}

module.exports.testGetFail = testGetFail

function testPostFail(chai, server, url, data, next) {
    chai.request(server)
        .post(url)
        .set("Content-Type", "application/json")
        .send(data)
        .end(function (err, res) {
            assert.strictEqual(res.status >= 400 && res.status < 500  , true)
            next(res)
        });
}

module.exports.testPostFail = testPostFail
