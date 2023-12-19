import { Serializer as УслугиМастераSerializer } from
  '../mixins/regenerated/serializers/i-i-s-anya-dodelat-услуги-мастера';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УслугиМастераSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
