"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
function getEnvVar(name, required, defaultValue = undefined) {
    var _a;
    const value = (_a = process.env[name]) !== null && _a !== void 0 ? _a : defaultValue;
    if (required && value === undefined) {
        console.error(`missing env. var. ${name}`); // cannot use logger as it relies on this file
        process.exit(1);
    }
    return value;
}
exports.port = parseInt(getEnvVar('PORT', true, '8181'), 10);
