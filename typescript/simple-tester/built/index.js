"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.it = exports.describe = void 0;
var describe;
exports.describe = describe;
exports.describe = describe = function (desc, cb) {
    console.log("\uD83C\uDFC1 " + desc);
    cb();
};
var it;
exports.it = it;
exports.it = it = function (desc, cb) {
    console.log("   " + desc);
    cb();
};
function expect(left) {
    return {
        toBe: function (right) {
            if (left !== right) {
                console.log("     expected \"" + left + "\" to be \"" + right + "\"");
            }
        }
    };
}
exports.expect = expect;
