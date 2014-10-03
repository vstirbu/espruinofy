var Transform = require('stream').Transform;

module.exports = function (b, opts) {
  var estream = new Transform(),
      start = true;

  estream._transform = function (chunk, encoding, done) {
    if (start) {
      start = false;
      estream.push('function onInit() {');
    }
    estream.push(chunk);
    done(null);
  };

  estream._flush = function () {
    estream.push('}');
  };

  b.pipeline.push(estream);
};
