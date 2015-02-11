var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-as-promised'));

var proxyquire = require('proxyquire');
//var thumbor = proxyquire.noCallThru().load('./../../src/thumbor.js', {
//  'request': {
//    get: function(url) {
//      response.calledUrl = url;
//
//      return response;
//    }
//  }
//});

describe('esboostrap', function(){

  xit('eh?', function(done){

    //expect(thumbor.get(options)).to.eventually.be.rejectedWith(Error, "imageUrl and size options are mandatory").notify(done);
  });
});