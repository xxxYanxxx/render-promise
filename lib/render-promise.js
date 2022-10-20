"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var render_special_1 = __importDefault(require("./render-special"));
function renderPromise(InnerComponent, name) {
    return function (props) {
        var render = new render_special_1.default(name);
        return new Promise(function (resolve, reject) {
            var _props = (props !== null && props !== void 0 ? props : {});
            var el = (react_1.default.createElement(InnerComponent, __assign({}, _props, { onOk: function (res) {
                    render.unmountComponentAtNode();
                    render = null;
                    resolve(res);
                }, onClose: function (err) {
                    render.unmountComponentAtNode();
                    render = null;
                    reject(err);
                } })));
            render.render(el);
        });
    };
}
exports.default = renderPromise;
