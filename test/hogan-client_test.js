
(function() {

  "use strict";

  var grunt = require('grunt'),
      fs = require('fs'),
      path = require('path');

  /*
    ======== A Handy Little Nodeunit Reference ========
    https://github.com/caolan/nodeunit

    Test methods:
      test.expect(numAssertions)
      test.done()
    Test assertions:
      test.ok(value, [message])
      test.equal(actual, expected, [message])
      test.notEqual(actual, expected, [message])
      test.deepEqual(actual, expected, [message])
      test.notDeepEqual(actual, expected, [message])
      test.strictEqual(actual, expected, [message])
      test.notStrictEqual(actual, expected, [message])
      test.throws(block, [error], [message])
      test.doesNotThrow(block, [error], [message])
      test.ifError(value)
  */

  exports.acceptanceTests = {
    compile: function(test) {
      var expectedFiles = grunt.file.expandFiles('test/expected/**/*.js');
      test.expect(expectedFiles.length);

      var expected, actual, basename;
      expectedFiles.forEach(function(expectedSrc) {
        basename = path.basename(expectedSrc);
        expected = grunt.file.read(expectedSrc);
        actual = grunt.file.read(path.join('test/tmp', basename));

        test.equal(expected, actual, 'expected "' + basename + '" to match');
      });

      test.done();
    }
  };
}());
