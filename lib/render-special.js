"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = __importDefault(require("react-dom"));
var Render = /** @class */ (function () {
    function Render(name) {
        this.name = name;
        this.div = null;
        this.hidden = false;
    }
    Render.prototype.create = function () {
        this.div = document.createElement('div');
        this.div.setAttribute('tool-element', this.name);
        document.body.appendChild(this.div);
        if (this.hidden)
            this.div.style.display = 'none';
        else
            this.div.style.display = '';
    };
    Render.prototype.remove = function () {
        if (!this.div)
            return;
        document.body.removeChild(this.div);
        this.div = null;
    };
    Render.prototype.show = function () {
        if (!this.div)
            return;
        this.hidden = false;
        this.div.style.display = '';
    };
    Render.prototype.hide = function () {
        if (!this.div)
            return;
        this.hidden = true;
        this.div.style.display = 'none';
    };
    Render.prototype.render = function (element) {
        if (!this.div)
            this.create();
        react_dom_1.default.render(element, this.div);
    };
    Render.prototype.unmountComponentAtNode = function () {
        react_dom_1.default.unmountComponentAtNode(this.div);
        this.remove();
    };
    return Render;
}());
exports.default = Render;
