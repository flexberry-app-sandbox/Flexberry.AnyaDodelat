import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолEnum from '../enums/i-i-s-anya-dodelat-пол';

export default FlexberryEnum.extend({
  enum: ПолEnum,
  sourceType: 'IIS.AnyaDodelat.Пол'
});
