"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observation = void 0;
const uuid_1 = require("uuid");
const Point_1 = require("./../point/Point");
class Observation {
    constructor(target) {
        this._id = uuid_1.v4();
        this._target = new Point_1.Point();
        this._measurements = [];
    }
    get target() {
        return this._target;
    }
    set target(targetPoint) {
        this._target = targetPoint;
    }
    get measurements() {
        return this._measurements;
    }
    addMeasure(M) {
        this._measurements.push(M);
    }
}
exports.Observation = Observation;
//# sourceMappingURL=Observation.js.map