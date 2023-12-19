import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдиницыEnum from '../enums/i-i-s-anya-dodelat-единицы';

export default FlexberryEnum.extend({
  enum: ЕдиницыEnum,
  sourceType: 'IIS.AnyaDodelat.Единицы'
});
