import NodeGeodesy from './../index';

const Point = NodeGeodesy.Point;

let Job1 = new NodeGeodesy.Campain('My campain');

let P1 = new Point(0, 0, 0, 'SP1', NodeGeodesy.PointType.Fix);
let P2 = new Point(1, 0, 0, 'ME1', NodeGeodesy.PointType.Meas);

Job1.importPoints([P1, P2]);






