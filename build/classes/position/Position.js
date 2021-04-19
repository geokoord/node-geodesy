"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
const uuid_1 = require("uuid");
const Point_1 = require("./../point/Point");
class Position {
    constructor(name, ih, orientation) {
        this._id = uuid_1.v4();
        this._name = name;
        this._ih = ih || 0;
        this._iPoint = null;
        this._refPoint = null;
        this._orientation = orientation || 0;
        this._observations = [];
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get ih() {
        return this._ih;
    }
    set ih(h) {
        this._ih = h;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    get refPoint() {
        return this._refPoint;
    }
    get iPoint() {
        return this._iPoint;
    }
    set refPoint(P) {
        this._refPoint = P;
        this._iPoint = new Point_1.Point(P.N, P.E, P.height + this._ih);
    }
    set iPoint(P) {
        this._iPoint = P;
        this._refPoint = new Point_1.Point(P.N, P.E, P.height - this._ih);
    }
    addObservation(O) {
        this._observations.push(O);
    }
    static appendPolarCoordinates(measure) {
        return null;
    }
}
exports.Position = Position;
//# sourceMappingURL=Position.js.map