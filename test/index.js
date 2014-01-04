'use strict';

var     StullerApi = require('../')
    ,   expect     = require('chai').expect
    ,   util       = require('util')
    ,   fs         = require('fs')
    ;

describe('StullerApi', function() {

    it('should create StullerApi Object', function() {
        var api = new StullerApi();
        expect(api).to.be.instanceof(StullerApi);
    });

    it('should update opts', function() {
        var api = new StullerApi();
        var token = api.stullerDeveloperToken;

        api.update({
            stullerDeveloperToken: '123'
        });

        expect(api.stullerDeveloperToken).to.equal('123');
    });

    describe('Developer Token', function() {
        it('should test if Dev Token set', function() {
            var api = new StullerApi();
            expect(api.isDevTokenSet()).to.be.false;
            api.addToken();
            expect(api.isDevTokenSet()).to.be.true;
        });
    });

    describe('getQuery', function() {
        it('should return formatted query', function() {

            var api = new StullerApi();
            expect(api.getQuery('ItemIDs', [123,222])).to.contain('ItemIDs=123');

        });
    });

    describe('FetchItemInfo', function() {
        it('should accept just a string', function() {
            var api = new StullerApi();
            api.FetchItemInfo('123ABC');
            expect(api.requestBody).to.contain('123ABC');
        });
        it('should accept an array', function() {
            var api = new StullerApi();
            api.FetchItemInfo(['FOO', 'BAR', 'F14.5:166316:P']);
            expect(api.requestBody).to.contain('FOO');
            expect(api.requestBody).to.contain('BAR');
        });

        it('should correctly parse response', function(done) {
            var api = new StullerApi({
                request: request
            });
            api
                .FetchItemInfo(['FOO', 'BAR', 'F14.5:166316:P'])
                .send(function(err, result) {
                    expect(result[0].ItemID).to.be.defined;
                    expect(result).length.to.be(2);
                    done();
                });
        });



    });

    describe('FetchItemInfoByItemID', function() {
        it('should accept just a string', function() {
            var api = new StullerApi();
            api.FetchItemInfoByItemID('123');
            expect(api.requestBody).to.contain('123');
        });
        it('should accept an array', function() {
            var api = new StullerApi();
            api.FetchItemInfoByItemID(['123', '444', '21048']);
            expect(api.requestBody).to.contain('123');
            expect(api.requestBody).to.contain('444');
        });

        it('should correctly parse response', function(done) {
            var api = new StullerApi({
                request: request
            });
            api
                .FetchItemInfoByItemID([123, 222])
                .send(function(err, result) {
                    expect(result[0].ItemID).to.be.defined;
                    expect(result).length.to.be(2);
                    done();
                });
        });
    });


    describe('FetchItemInfoBySeries', function() {
        it('should accept just a string', function() {
            var api = new StullerApi();
            api.FetchItemInfoByItemID('123');
            expect(api.requestBody).to.contain('123');
        });
        it('should accept an array', function() {
            var api = new StullerApi();
            api.FetchItemInfoBySeries(['123', '444', '21048']);
            expect(api.requestBody).to.contain('123');
            expect(api.requestBody).to.contain('444');
        });

        it('should correctly parse response', function(done) {
            var api = new StullerApi({
                request: request
            });
            api
                .FetchItemInfoBySeries([123, 222])
                .send(function(err, result) {
                    expect(result[0].ItemID).to.be.defined;
                    expect(result).length.to.be(2);
                    done();
                });
        });
    });


    describe('FetchItemPriceOnHand', function() {
        it('should accept just a string', function() {
            var api = new StullerApi();
            api.FetchItemPriceOnHand('123');
            expect(api.requestBody).to.contain('123');
        });
        it('should accept an array', function() {
            var api = new StullerApi();
            api.FetchItemPriceOnHand(['123', '444', '21048']);
            expect(api.requestBody).to.contain('123');
            expect(api.requestBody).to.contain('444');
        });

        it('should correctly parse response', function(done) {
            var api = new StullerApi({
                request: request
            });
            api
                .FetchItemPriceOnHand([123, 222])
                .send(function(err, result) {
                    expect(result[0].ItemID).to.be.defined;
                    expect(result).length.to.be(2);
                    done();
                });
        });
    });

    describe('FetchItemPriceOnHandByItemID', function() {
        it('should accept just a string', function() {
            var api = new StullerApi();
            api.FetchItemPriceOnHandByItemID('123');
            expect(api.requestBody).to.contain('123');
        });
        it('should accept an array', function() {
            var api = new StullerApi();
            api.FetchItemPriceOnHandByItemID(['123', '444', '21048']);
            expect(api.requestBody).to.contain('123');
            expect(api.requestBody).to.contain('444');
        });

        it('should correctly parse response', function(done) {
            var api = new StullerApi({
                request: request
            });
            api
                .FetchItemPriceOnHandByItemID([123, 222])
                .send(function(err, result) {
                    expect(result[0].ItemID).to.be.defined;
                    expect(result).length.to.be(2);
                    done();
                });
        });
    });

    describe('FetchItemPriceOnHandBySeries', function() {
        it('should accept just a string', function() {
            var api = new StullerApi();
            api.FetchItemPriceOnHand('123');
            expect(api.requestBody).to.contain('123');
        });
        it('should accept an array', function() {
            var api = new StullerApi();
            api.FetchItemPriceOnHandBySeries(['123', '444', '21048']);
            expect(api.requestBody).to.contain('123');
            expect(api.requestBody).to.contain('444');
        });

        it('should correctly parse response', function(done) {
            var api = new StullerApi({
                request: request
            });
            api
                .FetchItemPriceOnHandBySeries([123, 222])
                .send(function(err, result) {
                    expect(result[0].ItemID).to.be.defined;
                    expect(result).length.to.be(2);
                    done();
                });
        });
    });


    describe('FetchItems', function() {

        it('should correctly parse response', function(done) {
            var api = new StullerApi({
                request: request
            });
            api
                .FetchItems()
                .send(function(err, result) {
                    expect(result[0].ItemID).to.be.defined;
                    expect(result).length.to.be(2);
                    done();
                });
        });
    });

    describe('FetchRTWItems', function() {

        it('should correctly parse response', function(done) {
            var api = new StullerApi({
                request: request
            });
            api
                .FetchRTWItems()
                .send(function(err, result) {
                    expect(result).length.to.be(6);
                    done();
                });
        });
    });

    describe('addToken', function() {
        it('should add the developers token to the url', function() {
            var api = new StullerApi();
            api.addToken();
            expect(api.requestBody).to.contain('DeveloperToken=');
        });
    });

    // This test actually hits the Stuller API
    describe.skip('send', function() {
        it('should send the request to stuller', function(done) {
            var api = new StullerApi();
            api.FetchItemInfo(['F14.5:166316:P', 'R16738:165859:P']).send(function(err, result) {
                console.log(util.inspect(result, false, null));
                done();
            });
        });

    });

});

// Stubbing request
function request(options, callback) {

  var url = options.url;

    var file = __dirname + '/fixtures/';

    if (~url.indexOf('FetchItemInfo?')) file += 'ArrayOfItem.xml';
    if (~url.indexOf('FetchItemInfoByItemID?')) file += 'ArrayOfItem.xml';
    if (~url.indexOf('FetchItemInfoBySeries?')) file += 'ArrayOfItem.xml';

    if (~url.indexOf('FetchItemPriceOnHand?')) file += 'ItemPriceOnHand.xml';
    if (~url.indexOf('FetchItemPriceOnHandByItemID?')) file += 'ItemPriceOnHand.xml';
    if (~url.indexOf('FetchItemPriceOnHandBySeries?')) file += 'ItemPriceOnHand.xml';

    if (~url.indexOf('FetchItems?')) file += 'ArrayOfItemIdentifier.xml';
    if (~url.indexOf('FetchRTWItems?')) file += 'ArrayOfItemID.xml';


    fs.readFile(file, function(err, res) {

        if (err) return callback && callback(err);

        return callback && callback.call(this, null, {},res);
    });
}
