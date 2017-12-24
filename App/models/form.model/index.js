import Immutable from 'immutable';

/**
 * @constructor
 * @this { FormModelClass }
 */

export default class FormModelClass {

  static TYPE_ONE_WAY = 'oneway';
  static TYPE_SEVERAL = 'several';
  static TYPE_ANOTHER = 'another';
  static TYPE_SAME = 'same';

  static COMFORT_STANDART = 'standart';
  static COMFORT_EXCURSION = 'excursion';
  static COMFORT_TOURIST = 'tourist';

  /**
   * Started initialization os stores structure
   * @static { init }
   * @returns { Map }
   */

  static init() {
    return Immutable.Map({
      tripType: FormModelClass.TYPE_ONE_WAY,
      passengersNumber: 50,
      luggage: false,
      comfort: FormModelClass.COMFORT_STANDART
    });
  }
}
