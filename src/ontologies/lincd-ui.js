"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.lincdUi = exports._self = exports.ns = exports.loadData = void 0;
var Prefix_1 = require("@_linked/core/utils/Prefix");
var NameSpace_1 = require("@_linked/core/utils/NameSpace");
var package_js_1 = require("../package.js");
var _this = __importStar(require("./lincd-ui.js"));
var dataFile = '../data/lincd-ui.json';
var base = 'http://lincd.org/ont/lincd-ui/';
Prefix_1.Prefix.add('lincd-ui', base);
var loadData = function () {
    if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
        return Promise.resolve("".concat(dataFile)).then(function (s) { return __importStar(require(s)); });
    }
    //@ts-ignore
    return Promise.resolve("".concat(dataFile)).then(function (s) { return __importStar(require(s)); }).then(function (data) { return data.default; });
};
exports.loadData = loadData;
exports.ns = (0, NameSpace_1.createNameSpace)(base);
exports._self = (0, exports.ns)('');
exports.lincdUi = {
    _self: exports._self,
};
(0, package_js_1.linkedOntology)(_this, exports.ns, 'lincd-ui', exports.loadData, dataFile);
//# sourceMappingURL=lincd-ui.js.map