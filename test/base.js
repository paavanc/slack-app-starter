// TODO: MAKE DUMB TEST BETTER

const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const config = require('../config');
const utiltest = require('../src/utils/test');
chai.use(chaiHttp);

const baseUrl = "/"


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


makeSuite('Base', function () {

    it('test / GET', function (done) {
            utiltest.testGetFail(chai, server, baseUrl, function (res) {
                done();
            });
    });


});
