module.exports = function (data) {
  return new Promise(function(resolve) {
    api = require('./namespaces/' + data.fn + '.fn');
    resolve(api(data.params));
  });
}