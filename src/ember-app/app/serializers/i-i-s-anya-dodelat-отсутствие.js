import { Serializer as ОтсутствиеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-anya-dodelat-отсутствие';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтсутствиеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
