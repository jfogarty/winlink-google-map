'use strict';
/**
 * @fileOverview utilities
 */

//--------------------------------------------------------------------------
function ConvertDMSToDD(degrees, minutes, seconds, direction) {
    var dd = degrees + minutes/60.0 + seconds/(60.0*60.0);
    if (direction == "S" || direction == "W") {
        dd = dd * -1;  // Don't do anything for N or E
    }
    // console.log("Coordinate is [%f]", dd);
    return dd;
}

  //--------------------------------------------------------------------------
  /**
   * @summary **ci=map display**
   * @description
   * Converts dd-mm.ddddL to decimal long or lat.
   * @constructor
   * @param {input} coordinate value. Example:'26-27.37N'
   * @returns decimal coordinate as float.
   */  
function toDD(input) {
    var parts = input.split(/(\d+)\-(\d+)\.(\d+)(\w)/);
    // console.log("Coord [%s] as (%s,%s,%s,%s)", input, parts[1], parts[2], parts[3], parts[4]);
    return ConvertDMSToDD(parseInt(parts[1]), parseInt(parts[2]), parseInt(parts[3]), parts[4]);
    // '26-27.37N'
}
