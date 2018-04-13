Page () => {
  this.title = 'Gmail Page';
};

Page.prototype.open = () => {
  browser.url('http://www.tlkeith.com/WebDriverIOTutorialTest.html');
};

module.exports new Page();
