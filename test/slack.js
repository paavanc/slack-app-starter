// TODO: MAKE DUMB TEST BETTER

const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const config = require('../config');
const utiltest = require('../src/utils/test');
chai.use(chaiHttp);

const slackUrl = "/slack"

function makeSuite(name, tests) {
    describe(name, function () {
        beforeEach(function (done) {
          //TODO: fill any data necc

            done();
        });
        tests();
        afterEach(function (done) {
            //TODO: clear any data necc
            done();
        });

    });
}


makeSuite('Slack', function () {

    it('test /slack POST', function (done) {
            utiltest.testPostFail(chai, server, slackUrl, {"token":config.slack.verificationToken}, function (res) {
                done();
            });
    });


});
