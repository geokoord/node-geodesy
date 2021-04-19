"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campain = void 0;
const uuid_1 = require("uuid");
class Campain {
    constructor(name) {
        this._id = uuid_1.v4();
        this._name = name;
        this._points = [];
        this._positions = [];
    }
    set name(v) {
        this.name = v;
    }
    get name() {
        return this._name;
    }
}
exports.Campain = Campain;
//# sourceMappingURL=Campain.js.map