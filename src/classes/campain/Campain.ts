import { v4 as uuidv4 } from 'uuid';
import { Point } from './../point/Point'
import { Position } from './../position/Position'

export class Campain {

  private _id: string;
  private _name: string;                    //Name of the Campain/Job
  private _points: Array<Point>;            //Points of this Campain/Job
  private _positions: Array<Position>       //Positions of this Campain/Job

  constructor(name: string) {
    this._id = uuidv4();
    this._name = name;
    this._points = [];
    this._positions = [];
  }

  public set name(v: string) {
    this.name = v;
  }

  public get name(): string {
    return this._name
  }

  public importPoints(PointList: Array<Point>) {
    this._points = PointList;
  }

  public get points(): Array<Point> {
    return this._points;
  }



}