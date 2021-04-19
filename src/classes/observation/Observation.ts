import { v4 as uuidv4 } from 'uuid';
import { Point } from './../point/Point'
import { Measure } from './../measure/Measure'

export class Observation {
  private _id: string;
  private _target: Point;        //Inclined track
  private _measurements: Array<Measure>;    //Measurements/Observations from this position

  constructor(target?: Point) {
    this._id = uuidv4();
    this._target = new Point();
    this._measurements = [];
  }

  get target(): Point {
    return this._target;
  }

  set target(targetPoint: Point) {
    this._target = targetPoint;
  }

  get measurements(): Array<Measure> {
    return this._measurements;
  }

  addMeasure(M: Measure) {
    this._measurements.push(M);
  }
}