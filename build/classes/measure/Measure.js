"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Measure = void 0;
const uuid_1 = require("uuid");
class Measure {
    constructor(hz, vz, sd) {
        this._id = uuid_1.v4();
        this._hz = hz;
        this._vz = vz;
        this._sd = sd;
        this._temperature = null;
        this._pressure = null;
    }
    get hz() {
        return this.hz;
    }
    get vz() {
        return this._vz;
    }
    get sd() {
        return this.sd;
    }
}
exports.Measure = Measure;
//# sourceMappingURL=Measure.js.map