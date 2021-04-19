import { v4 as uuidv4 } from 'uuid';
import { Point } from './../point/Point'
import { Measure } from './../measure/Measure'

export class Observation {
  private _id: string;
  private _target: Point;                   //Inclined track
  private _measurements: Array<Measure>;    //Measurements/Observations from this position

  constructor(target?: Point) {
    this._id = uuidv4();
    this._target = null;
    this._measurements = [];
  }

  get target(): Point {
    return this._target;
  }

  get measurements(): Array<Measure> {
    return this._measurements;
  }

  addMeasure(M: Measure) {
    this._measurements.push(M);
    this.calculatePoint();
  }

  private calculatePoint() {

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


    console.log('Horizontal distance: ' + avg_sh)
    console.log('Vertical distance: ' + avg_sv)

    let dX = avg_sh * Math.cos(avg_hz);
    let dY = avg_sh * Math.sin(avg_hz);
    let dZ = avg_sv;

    console.log('dX: ' + dX);
    console.log('dY: ' + dY);
    console.log('dZ: ' + dZ);

    this._target = new Point(dX, dY, dZ);
  }
}