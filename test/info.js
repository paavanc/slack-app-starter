
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const config = require('../config');
const utiltest = require('../src/utils/test');
chai.use(chaiHttp);

const infoUrl = "/info"

let expectedInfoResult = {}


function makeSuite(name, tests) {
    describe(name, function () {
        beforeEach(function (done) {
          //TODO: fill any data necc
          expectedInfoResult = { app: {
              name: 'Slack App Starter',
              description: 'Slack App Starter',
              version: '1.0.0'
          }}
            done();
        });
        tests();
        afterEach(function (done) {
            //TODO: clear any data necc
            expectedInfoResult={}
            done();
        });

    });
}


makeSuite('Info', function () {

    it('test /info GET', function (done) {
            utiltest.testGet(chai, server, infoUrl + "/version", function (res) {
                assert.strictEqual(res.body.app.name, expectedInfoResult.app.name)
                done();
            });
    });


});
