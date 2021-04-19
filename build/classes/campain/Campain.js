"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campain = void 0;
const uuid_1 = require("uuid");
class Campain {
    constructor(name) {
        this._id = uuid_1.v4();
        this._name = name;
        this._points = [];
        this._position = null;
    }
    set name(v) {
        this.name = v;
    }
    get name() {
        return this._name;
    }
    importPoints(PointList) {
        this._points = PointList;
    }
    get points() {
        return this._points;
    }
    set position(SP) {
        this._position = SP;
    }
}
exports.Campain = Campain;
//# sourceMappingURL=Campain.js.map