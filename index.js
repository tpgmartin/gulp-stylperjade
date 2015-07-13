'use strict';

var stylperjade = require('stylperjade'),
    gutil       = require('gulp-util'),
    assign      = require('object-assign'),
    transform   = require('stream').Transform,

    PLUGIN_NAME = 'gulp-stylperjade';

module.exports = function (options) {
    var stream = new transform({objectMode: true});

    // Ignore stylesheets in the HTML files; only use those from the stream

    stream._transform = function (file, encoding, cb) {
        if (file.isStream()) {
            var error = 'Streaming not supported';
            return cb(new gutil.PluginError(PLUGIN_NAME, error));
        } else if (file.isBuffer()) {
            //options = assign(options, {raw: String(file.contents)});
            //stylperjade(options.html, options, function (err, output) {
            //    if (err) {
            //        return cb(new gutil.PluginError(PLUGIN_NAME, err));
            //    }
            //    file.contents = new Buffer(output);
            //    cb(null, file);
            //});
        } else {
            // Pass through when null
            cb(null, file);
        }
    };

    return stream;
};