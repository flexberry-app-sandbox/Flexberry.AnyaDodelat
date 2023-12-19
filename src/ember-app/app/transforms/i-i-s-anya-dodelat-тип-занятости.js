import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипЗанятостиEnum from '../enums/i-i-s-anya-dodelat-тип-занятости';

export default FlexberryEnum.extend({
  enum: ТипЗанятостиEnum,
  sourceType: 'IIS.AnyaDodelat.ТипЗанятости'
});
