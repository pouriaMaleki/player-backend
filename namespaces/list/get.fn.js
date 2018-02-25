const rp = require('request-promise');

module.exports = function (params) {
  return rp("http://www.getsongg.com/dapp/getnewcases?lang=en")
  .then((res) => {
    let result = JSON.parse(res);
    let songs = result.filter((item) => {
      return item.type == 'song';
    });
    return songs;
  })
}