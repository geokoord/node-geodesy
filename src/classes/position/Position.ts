import { v4 as uuidv4 } from 'uuid';
import { Point } from './../point/Point'
import { Observation } from './../observation/Observation'
import { Measure } from './../measure/Measure'

export class Position {
  private _id: string;
  private _name: string;                        //Name of the Position
  private _iPoint: Point;                       //Point of the instrument Position
  private _refPoint: Point;                     //Point of Interest
  private _ih: number;                          //Instrument height
  private _orientation: number;                 //Orientation of the instrument
  private _observations: Array<Observation>;    //Measurements/Observations from this position

  constructor(name: string, ih?: number, orientation?: number) {
    this._id = uuidv4();
    this._name = name;
    this._ih = ih || 0;
    this._iPoint = null;
    this._refPoint = null;
    this._orientation = orientation || 0;
    this._observations = [];
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get ih(): number {
    return this._ih;
  }

  set ih(h) {
    this._ih = h;
  }

  get orientation(): number {
    return this._orientation;
  }

  set orientation(orientation) {
    this._orientation = orientation;
  }

  get refPoint(): Point {
    return this._refPoint
  }

  get iPoint(): Point {
    return this._iPoint
  }

  set refPoint(P: Point) {
    this._refPoint = P;
    this._iPoint = new Point(P.N, P.E, P.height + this._ih);
  }

  set iPoint(P: Point) {
    this._iPoint = P;
    this._refPoint = new Point(P.N, P.E, P.height - this._ih);
  }

  addObservation(O: Observation) {
    this._observations.push(O);
  }

  static appendPolarCoordinates(measure: Measure): Point {




    return new Point(0, 0);
  }

}