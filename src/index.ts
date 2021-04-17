
import { Point } from './classes/point/Point'

let P1 = new Point(0, 0, 0)
let P2 = new Point(0, 10, 9.9999999)


console.log(P1.geodXYZ);
console.log('Distance 2D: ' + P1.distance2D(P2));
console.log('Distance 3D: ' + P1.distance3D(P2));
console.log('Direction: ' + P1.direction(P2) * 200 / Math.PI);
console.log('Zenithwinkel: ' + Point.zenithangle(P1, P2) * 200 / Math.PI);
