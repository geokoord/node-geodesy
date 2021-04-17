
export class Point {

  private _name: string;
  private _N: number;     //North-value
  private _E: number;      //East-value
  private _h: number;      //height

  constructor(north: number, east: number, height?: number, name?: string) {
    this._name = name;
    this._N = north || 0;
    this._E = east || 0;
    this._h = height || 0;
  }

  /**
   * Get mathematical XYZ Array
   * X = East
   * Y = North
   * Z = height
   */
  get mathXYZ(): Array<number> {
    return [this.E, this.N, this.height];
  }


  /**
   * Get geodetic XYZ Array
   * X = North
   * Y = East
   * Z = height
   */
  get geodXYZ(): Array<number> {
    return [this.N, this.E, this.height];
  }

  get E(): number {
    return this._E;
  }

  get N(): number {
    return this._N;
  }

  get height(): number {
    return this._h;
  }

  set E(e: number) {
    this._E = e;
  }

  set N(n: number) {
    this._N = n;
  }

  set height(h: number) {
    this._h = h;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }


  /**
   * Method for 3D distance calculation to another Point
   * @param otherPoint Target point for distance calculation
   * @returns distance
   */
  distance3D(otherPoint: Point): number {
    return Point.distance3D(this, otherPoint);
  }

  /**
   * Static method for 3D distance calculation between two Points P1 and P2
   * @param P1 Point 1
   * @param P2 Point 2 
   * @returns distance
   */
  static distance3D(P1: Point, P2: Point): number {
    return Math.sqrt(Math.pow(P1.N - P2.N, 2) + Math.pow(P1.E - P2.E, 2) + Math.pow(P1.height - P2.height, 2));
  }

  /**
   * Method for 2D distance calculation to another Point
   * @param otherPoint Target point for distance calculation
   * @returns distance
   */
  distance2D(otherPoint: Point): number {
    return Point.distance2D(this, otherPoint);
  }

  /**
   * Static method for 2D distance calculation between two Points P1 and P2
   * @param P1 Point 1
   * @param P2 Point 2 
   * @returns distance
   */
  static distance2D(P1: Point, P2: Point): number {
    return Math.sqrt(Math.pow(P1.N - P2.N, 2) + Math.pow(P1.E - P2.E, 2));
  }

  /**
   * Returns the orientation (azimuth) to another point.
   * @param otherPoint 
   * @returns direction (orientational angle)
   */
  direction(otherPoint: Point): number {
    return Point.direction(this, otherPoint);
  }

  /**
   * Returns the orientation (azimuth) from P1 to another point P2.
   * @param P1 
   * @param P2
   * @returns direction (orientational angle)
   */
  static direction(P1: Point, P2: Point): number {
    return Math.atan2((P2.E - P1.E), (P2.N - P1.N));
  }

  /**
   * Returns the zenith angle from P1 to another point P2.
   * @param P1 
   * @param P2
   * @returns direction (orientational angle)
   */
  static zenithangle(P1: Point, P2: Point): number {
    let diff_h = P2.height - P1.height;
    let dist2D = Point.distance2D(P1, P2);

    return Math.atan2(dist2D, diff_h);
  }







}