var Page = require('./page');

var loginPage = Object.create(Page, {
userName:{get: () => {return browser.element('#username');}},

}
