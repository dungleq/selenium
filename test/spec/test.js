var webdriverIO = require('webdriverio');
var should = require('should');
var assert = require('assert');
describe('test webdriver.io page', function() {
  this.timeout (10);
  var driver = {};
  before (function () {
    driver = webdriverIO.remote({desiredCapabilities:{browserName:'firefox'}});
    return driver.init();
  });

  it('test case 1 - should have the right title - the fancy generator way', function () {
    return driver
      .url('http://gmail.com')
      .getTitle(). then ( function (title) {
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    }). catch(erro => {
      console.log(erro);
    });
});
after (function () {
  return driver.end();
});
});
