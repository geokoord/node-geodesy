import { Measure } from '../classes/measure/Measure';
import { Observation } from '../classes/observation/Observation';
import { Position } from '../classes/position/Position';
import NodeGeodesy from './../index';

const Point = NodeGeodesy.Point;

let Job1 = new NodeGeodesy.Campain('My campain');

let P1 = new Point(0, 0, 0, 'SP1', NodeGeodesy.PointType.Fix);
let P2 = new Point(1, 0, 0, 'ME1', NodeGeodesy.PointType.Meas);

Job1.importPoints([P1, P2]);

let SP = new Position('SP1_Position', 1.000, 0);
SP.refPoint = P1;

//New Observation
let obs = new Observation(P1);
SP.addObservation(obs);

obs.addMeasure(new Measure(121.0032 * Math.PI / 200, 99.9998 * Math.PI / 200, 30.565));
obs.addMeasure(new Measure(121.0020 * Math.PI / 200, 100.0012 * Math.PI / 200, 30.563));

console.log(obs.target.geodXYZ)

console.log('2D: ' + Point.distance2D(P1, obs.target));
console.log('3D: ' + Point.distance3D(P1, obs.target));









