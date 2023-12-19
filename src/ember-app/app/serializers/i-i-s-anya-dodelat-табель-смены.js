import { Serializer as ТабельСменыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-anya-dodelat-табель-смены';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТабельСменыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
