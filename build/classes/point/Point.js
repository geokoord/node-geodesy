"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointType = exports.Point = void 0;
const uuid_1 = require("uuid");
class Point {
    constructor(north, east, height, name, type) {
        this._id = uuid_1.v4();
        this._name = name || null;
        this._N = north;
        this._E = east;
        this._h = height;
        this._type = type || PointType.Meas;
    }
    /**
     * Get mathematical XYZ Array
     * X = East
     * Y = North
     * Z = height
     */
    get mathXYZ() {
        return [this.E, this.N, this.height];
    }
    /**
     * Get geodetic XYZ Array
     * X = North
     * Y = East
     * Z = height
     */
    get geodXYZ() {
        return [this.N, this.E, this.height];
    }
    get E() {
        return this._E;
    }
    get N() {
        return this._N;
    }
    get height() {
        return this._h;
    }
    set E(e) {
        this._E = e;
    }
    set N(n) {
        this._N = n;
    }
    set height(h) {
        this._h = h;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    /**
     * Method for 3D distance calculation to another Point
     * @param otherPoint Target point for distance calculation
     * @returns distance
     */
    distance3D(otherPoint) {
        return Point.distance3D(this, otherPoint);
    }
    /**
     * Static method for 3D distance calculation between two Points P1 and P2
     * @param P1 Point 1
     * @param P2 Point 2
     * @returns distance
     */
    static distance3D(P1, P2) {
        return Math.sqrt(Math.pow(P1.N - P2.N, 2) + Math.pow(P1.E - P2.E, 2) + Math.pow(P1.height - P2.height, 2));
    }
    /**
     * Method for 2D distance calculation to another Point
     * @param otherPoint Target point for distance calculation
     * @returns distance
     */
    distance2D(otherPoint) {
        return Point.distance2D(this, otherPoint);
    }
    /**
     * Static method for 2D distance calculation between two Points P1 and P2
     * @param P1 Point 1
     * @param P2 Point 2
     * @returns distance
     */
    static distance2D(P1, P2) {
        return Math.sqrt(Math.pow(P1.N - P2.N, 2) + Math.pow(P1.E - P2.E, 2));
    }
    /**
     * Returns the orientation (azimuth) to another point.
     * @param otherPoint
     * @returns direction (orientational angle)
     */
    direction(otherPoint) {
        return Point.direction(this, otherPoint);
    }
    /**
     * Returns the orientation (azimuth) from P1 to another point P2.
     * @param P1
     * @param P2
     * @returns direction (orientational angle)
     */
    static direction(P1, P2) {
        return Math.atan2((P2.E - P1.E), (P2.N - P1.N));
    }
    /**
     * Returns the zenith angle from P1 to another point P2.
     * @param P1
     * @param P2
     * @returns direction (orientational angle)
     */
    static zenithangle(P1, P2) {
        let diff_h = P2.height - P1.height;
        let dist2D = Point.distance2D(P1, P2);
        return Math.atan2(dist2D, diff_h);
    }
}
exports.Point = Point;
var PointType;
(function (PointType) {
    PointType[PointType["Fix"] = 0] = "Fix";
    PointType[PointType["Ref"] = 1] = "Ref";
    PointType[PointType["Con"] = 2] = "Con";
    PointType[PointType["Meas"] = 3] = "Meas";
})(PointType = exports.PointType || (exports.PointType = {}));
//# sourceMappingURL=Point.js.map