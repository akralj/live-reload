// Generated by CoffeeScript 1.9.3
var LiveReloadClient, ondata, reconnect;

reconnect = require('reconnect/shoe');

LiveReloadClient = function(uri) {
  var host, loc, ref;
  if (typeof uri === 'number') {
    loc = window.location;
    host = ((ref = window.location) != null ? ref.hostname : void 0) ? loc.protocol + "//" + loc.hostname : 'http://localhost';
    uri = host + ":" + uri;
  }
  reconnect(function(stream) {
    stream.on('data', ondata);
  }).connect(uri + '/shoe');
};

ondata = function(data) {
  if (data === 'reload') {
    document.location.reload();
  }
};

module.exports = LiveReloadClient;
