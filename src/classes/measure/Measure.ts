import { v4 as uuidv4 } from 'uuid';

export class Measure {
  private _id: string;
  private _sd: number;         //Inclined track
  private _hz: number;         //Horizontal angle
  private _vz: number;         //Vertical angle
  private _temperature;
  private _pressure;

  constructor(hz: number, vz: number, sd: number) {
    this._id = uuidv4();
    this._hz = hz;
    this._vz = vz;
    this._sd = sd;
    this._temperature = null;
    this._pressure = null;
  }

  get hz(): number {
    return this._hz;
  }

  get vz(): number {
    return this._vz;
  }

  get sd(): number {
    return this._sd;
  }

  get sh(): number {
    return (Math.sin(this.vz) * this.sd)
  }

  get sv(): number {
    return (Math.cos(this.vz) * this.sd)
  }
}