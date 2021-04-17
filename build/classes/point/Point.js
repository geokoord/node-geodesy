"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(north, east, height, name) {
        this._name = name;
        this._N = north || 0;
        this._E = east || 0;
        this._h = height || 0;
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
//# sourceMappingURL=Point.js.map