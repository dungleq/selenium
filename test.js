var webdriverio = require('webdriverio');
var options = {desiredCapabilities:{browsername:'firefox'}};
var client = webdriverio.remote(options);
client
  .init()
  .url('https://duckduckgo.com/')
  .setValue('#search_from_input_homepage', 'webdriverio')
  .click('#search_button_homepage')
  .getTitle().then((title)=> {
    console.log('Title was:' + title);
  })
  .end()
  .catch((err) => {
    console.log(err);
  });
