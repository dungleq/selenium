// tutorial1.js
//
// This is a simple test script that does the following tests:
//  open a website
//  validate title
//

// To Run:
//  $ mocha tutorial1.js

// Updated to support version 4 of webdriverio

// required libraries
var webdriverio = require('webdriverio'),
  should = require('should');

// a test script block or suite
describe('Title Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(100000);
  var driver = {};

  // hook to run before tests
  before( function() {
    // check for global browser (grunt + grunt-webdriver)
    if(typeof browser === "undefined") {
      // load the driver for browser
      driver = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
      return driver.init();
    } else {
      // grunt will load the browser driver
      driver = browser;
      return;
    }
  });

  // a test spec - "specification" - with "then"
  it('should be load correct page and title', function () {
    // load page, then call function()
    return driver
      .url('http://www.tlkeith.com/WebDriverIOTutorialTest.html')
      // get title, then pass title to function()
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("Web Driver IO - Tutorial Test Page");
        // uncomment for console debug
        // console.log('Current Page Title: ' + title);
     });
 });

  // a "hook" to run after all tests in this block
	after(function() {
    if(typeof browser === "undefined") {
      return driver.end();
    } else {
      return;
    }
  });
});
