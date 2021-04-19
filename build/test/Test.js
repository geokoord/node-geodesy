"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Measure_1 = require("../classes/measure/Measure");
const Observation_1 = require("../classes/observation/Observation");
const Position_1 = require("../classes/position/Position");
const index_1 = __importDefault(require("./../index"));
const Point = index_1.default.Point;
let Job1 = new index_1.default.Campain('My campain');
let P1 = new Point(0, 0, 0, 'SP1', index_1.default.PointType.Fix);
let P2 = new Point(1, 0, 0, 'ME1', index_1.default.PointType.Meas);
Job1.importPoints([P1, P2]);
let SP = new Position_1.Position('SP1_Position', 1.000, 0);
SP.refPoint = P1;
//New Observation
let obs = new Observation_1.Observation(P1);
SP.addObservation(obs);
obs.addMeasure(new Measure_1.Measure(121.0032 * Math.PI / 200, 99.9998 * Math.PI / 200, 30.565));
obs.addMeasure(new Measure_1.Measure(121.0020 * Math.PI / 200, 100.0012 * Math.PI / 200, 30.563));
console.log(obs.target.geodXYZ);
console.log('2D: ' + Point.distance2D(P1, obs.target));
console.log('3D: ' + Point.distance3D(P1, obs.target));
//# sourceMappingURL=Test.js.map