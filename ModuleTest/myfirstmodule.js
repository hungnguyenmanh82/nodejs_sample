/**
 * create a function and export it. other *.js file will require it:
 *    var dt = require('./myfirstmodule');
 *    dt.myDateTime()
 */
exports.myDateTime = function () {
    return Date();
};