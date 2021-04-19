"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observation = void 0;
const uuid_1 = require("uuid");
const Point_1 = require("./../point/Point");
class Observation {
    constructor(target) {
        this._id = uuid_1.v4();
        this._target = null;
        this._measurements = [];
    }
    get target() {
        return this._target;
    }
    get measurements() {
        return this._measurements;
    }
    addMeasure(M) {
        this._measurements.push(M);
        this.calculatePoint();
    }
    calculatePoint() {
        let sum_hz = 0;
        let sum_vz = 0;
        let sum_sh = 0;
        let sum_sv = 0;
        for (let m of this.measurements) {
            sum_hz += m.hz;
            sum_vz += m.vz;
            sum_sh += m.sh;
            sum_sv += m.sv;
        }
        let avg_hz = sum_hz / this.measurements.length;
        let avg_sh = sum_sh / this.measurements.length;
        let avg_sv = sum_sv / this.measurements.length;
        console.log('Horizontal distance: ' + avg_sh);
        console.log('Vertical distance: ' + avg_sv);
        let dX = avg_sh * Math.cos(avg_hz);
        let dY = avg_sh * Math.sin(avg_hz);
        let dZ = avg_sv;
        console.log('dX: ' + dX);
        console.log('dY: ' + dY);
        console.log('dZ: ' + dZ);
        this._target = new Point_1.Point(dX, dY, dZ);
    }
}
exports.Observation = Observation;
//# sourceMappingURL=Observation.js.map